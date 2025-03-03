import {Player} from '../../Player';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';

export class MagneticFieldGenerators extends Card implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.MAGNETIC_FIELD_GENERATORS,
      tags: [Tag.BUILDING],
      cost: 20,
      productionBox: {energy: -4, plants: 2},
      tr: {tr: 3},

      metadata: {
        cardNumber: '165',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(4, {digit}).br;
            pb.plus().plants(2);
          }).br;
          b.tr(3);
        }),
        description: 'Decrease your Energy production 4 steps and increase your Plant production 2 steps. Raise your TR 3 steps.',
      },
    });
  }

  public override bespokePlay(player: Player) {
    player.increaseTerraformRatingSteps(3);
    return undefined;
  }
}
