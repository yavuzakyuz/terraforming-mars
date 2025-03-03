import {CardName} from '../../../common/cards/CardName';
import {Player} from '../../Player';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {MoonExpansion} from '../../moon/MoonExpansion';
import {CardRenderer} from '../render/CardRenderer';
import {CardRequirements} from '../CardRequirements';
import {Card} from '../Card';
import {all} from '../Options';

export class LunaResort extends Card {
  constructor() {
    super({
      name: CardName.LUNA_RESORT,
      cardType: CardType.AUTOMATED,
      tags: [Tag.MOON],
      cost: 11,
      productionBox: {energy: -1, megacredits: 3},
      reserveUnits: {titanium: 2},
      tr: {moonColony: 1},

      requirements: CardRequirements.builder((b) => b.colonyTiles(2, {all})),
      metadata: {
        description:
          'Requires 2 colonies on the Moon. Spend 2 titanium. Decrease your energy production 1 step and increase your M€ production 3 steps. Raise the Colony Rate 1 step.',
        cardNumber: 'M21',
        renderData: CardRenderer.builder((b) => {
          b.minus().titanium(2).production((pb) => {
            pb.minus().energy(1).nbsp.megacredits(3);
          }).br;
          b.moonColonyRate();
        }),
      },
    });
  }

  public override bespokePlay(player: Player) {
    MoonExpansion.raiseColonyRate(player);
    return undefined;
  }
}
