import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../CardName';
import {CardType} from '../CardType';
import {Tags} from '../Tags';
import {Player} from '../../Player';
import {Resources} from '../../Resources';
import {Game} from '../../Game';
import {SelectAmount} from '../../inputs/SelectAmount';
import {SelectCardToKeep} from '../../deferredActions/SelectCardToKeep';
import {CardMetadata} from '../CardMetadata';
import {CardRenderer} from '../render/CardRenderer';

export class HiTechLab implements IProjectCard {
    public name = CardName.HI_TECH_LAB;
    public cost = 17;
    public tags = [Tags.SCIENCE, Tags.BUILDING];
    public cardType = CardType.ACTIVE;

    public play() {
      return undefined;
    }

    public canAct(player: Player): boolean {
      return player.getResource(Resources.ENERGY) > 0;
    }

    public action(player: Player, game: Game) {
      return new SelectAmount(
        'Select amount of energy to spend',
        'Spend energy',
        (amount: number) => {
          player.setResource(Resources.ENERGY, -amount);
          game.log('${0} spent ${1} energy', (b) => b.player(player).number(amount));

          const cardsDrawn: Array<IProjectCard> = [];
          for (let counter = 0; counter < amount; counter++) {
            cardsDrawn.push(game.dealer.dealCard());
          }
          game.defer(new SelectCardToKeep(player, game, 'Select card to take into hand', cardsDrawn));
          return undefined;
        },
        1,
        player.getResource(Resources.ENERGY),
      );
    }

    public getVictoryPoints() {
      return 1;
    }
    public metadata: CardMetadata = {
      cardNumber: 'X04',
      renderData: CardRenderer.builder((b) => {
        b.effectBox((eb) => {
          eb.text('X').energy(1).startAction.text('X').cards(1).asterix();
          eb.description('Action: Spend any amount of energy to draw the same number of cards. TAKE 1 INTO HAND AND DISCARD THE REST.');
        });
      }),
      victoryPoints: 1,
    };
}
