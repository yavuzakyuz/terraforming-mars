import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Player} from '../../Player';
import {Resources} from '../../../common/Resources';
import {CardName} from '../../../common/cards/CardName';
import {DecreaseAnyProduction} from '../../deferredActions/DecreaseAnyProduction';
import {CardRequirements} from '../CardRequirements';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class CloudSeeding extends Card implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.CLOUD_SEEDING,
      cost: 11,
      productionBox: {megacredits: -1, plants: 2},

      requirements: CardRequirements.builder((b) => b.oceans(3)),
      metadata: {
        cardNumber: '004',
        description: 'Requires 3 ocean tiles. Decrease your M€ production 1 step and any heat production 1 step. Increase your Plant production 2 steps.',
        renderData: CardRenderer.builder((b) => b.production((pb) => {
          pb.minus().megacredits(1).heat(1, {all}).br;
          pb.plus().plants(2);
        })),
      },
    });
  }
  public override bespokeCanPlay(player: Player): boolean {
    return player.production.megacredits > -5 &&
    player.canReduceAnyProduction(Resources.HEAT, 1);
  }

  public override bespokePlay(player: Player) {
    player.game.defer(
      new DecreaseAnyProduction(player, Resources.HEAT, {count: 1}));
    return undefined;
  }
}
