import {IProjectCard} from '../IProjectCard';
import {Player} from '../../Player';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Resources} from '../../../common/Resources';
import {CardRequirements} from '../CardRequirements';
import {Tag} from '../../../common/cards/Tag';

export class RichDeposits extends Card implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.RICH_DEPOSITS,
      cost: 12,

      requirements: CardRequirements.builder((b) => b.tag(Tag.SCIENCE, 2)),
      metadata: {
        cardNumber: 'Pf52',
        renderData: CardRenderer.builder((b) => b.production((pb) => pb.steel(3))),
        description: 'Requires 2 science tags. Increase your steel production 3 steps.',
      },
    });
  }

  public override bespokePlay(player: Player) {
    player.production.add(Resources.STEEL, 3);
    return undefined;
  }
}

