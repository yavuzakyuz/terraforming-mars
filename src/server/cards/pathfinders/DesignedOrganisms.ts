import {IProjectCard} from '../IProjectCard';
import {Player} from '../../Player';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {CardRequirements} from '../CardRequirements';
import {AddResourcesToCard} from '../../deferredActions/AddResourcesToCard';
import {CardResource} from '../../../common/CardResource';

export class DesignedOrganisms extends Card implements IProjectCard {
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.DESIGNED_ORGANISMS,
      cost: 12,
      tags: [Tag.SCIENCE, Tag.PLANT, Tag.MARS],
      requirements: CardRequirements.builder((b) => b.tag(Tag.SCIENCE, 5)),

      behavior: {
        production: {plants: 2},
        stock: {plants: 3},
      },

      metadata: {
        cardNumber: 'Pf23',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2)).plants(3).br;
          b.microbes(3).asterix().animals(1).asterix();
        }),
        description: 'Requires 5 science tags. Increase your plant production 2 steps. Gain 3 plants. ' +
          'Add 3 microbes to ANY card. Add 1 animal to ANY card.',
      },
    });
  }

  public override bespokePlay(player: Player) {
    player.game.defer(new AddResourcesToCard(player, CardResource.MICROBE, {count: 3}));
    player.game.defer(new AddResourcesToCard(player, CardResource.ANIMAL, {count: 1}));
    return undefined;
  }
}
