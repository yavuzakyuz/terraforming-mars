import {ICorporationCard} from '../corporation/ICorporationCard';
import {Player} from '../../Player';
import {Tag} from '../../../common/cards/Tag';
import {Resources} from '../../../common/Resources';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class Aphrodite extends Card implements ICorporationCard {
  constructor() {
    super({
      name: CardName.APHRODITE,
      tags: [Tag.PLANT, Tag.VENUS],
      startingMegaCredits: 47,
      cardType: CardType.CORPORATION,

      metadata: {
        cardNumber: 'R01',
        description: 'You start with 1 plant production and 47 M€.',
        renderData: CardRenderer.builder((b) => {
          b.br;
          b.production((pb) => pb.plants(1)).nbsp.megacredits(47);
          b.corpBox('effect', (ce) => {
            ce.effect('Whenever Venus is terraformed 1 step, you gain 2 M€.', (eb) => {
              eb.venus(1, {all}).startEffect.megacredits(2);
            });
          });
        }),
      },
    });
  }

  public override bespokePlay(player: Player) {
    player.production.add(Resources.PLANTS, 1);
    return undefined;
  }
}
