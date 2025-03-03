import {CardName} from '../../../common/cards/CardName';
import {Player} from '../../Player';
import {CardType} from '../../../common/cards/CardType';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Resources} from '../../../common/Resources';
import {IActionCard} from '../ICard';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class SolarPanelFoundry extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      name: CardName.SOLAR_PANEL_FOUNDRY,
      cardType: CardType.ACTIVE,
      tags: [Tag.ENERGY, Tag.MOON, Tag.BUILDING],
      cost: 11,

      metadata: {
        cardNumber: 'M89',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 Steel to increase your Energy Production 1 step.',
            (eb) => eb.startAction.steel(2).arrow().production((pb) => pb.energy(1)));
        }),
      },
    });
  }

  public canAct(player: Player) {
    return player.steel >= 2;
  }

  public action(player: Player) {
    player.deductResource(Resources.STEEL, 2);
    player.production.add(Resources.ENERGY, 1);
    return undefined;
  }
}
