import {expect} from 'chai';
import {COMMUNITY_CARD_MANIFEST} from '../src/server/cards/community/CommunityCardManifest';
import {CardFinder} from '../src/server/CardFinder';
import {setCustomGameOptions} from './TestingUtils';
import {GameCards} from '../src/server/GameCards';
import {CardName} from '../src/common/cards/CardName';

describe('GameCards', function() {
  it('correctly removes projectCardsToRemove', function() {
    // include corporate era
    const gameOptions = setCustomGameOptions({
      corporateEra: false,
      preludeExtension: false,
      venusNextExtension: false,
      coloniesExtension: false,
      turmoilExtension: false,
      promoCardsOption: false,
      communityCardsOption: false,
      aresExtension: true,
    });
    const names = new GameCards(gameOptions).getProjectCards().map((c) => c.name);
    expect(names).to.contain(CardName.SOLAR_FARM);
    expect(names).to.not.contain(CardName.CAPITAL);
  });

  it('correctly separates 71 corporate era cards', function() {
    // include corporate era
    const gameOptions = setCustomGameOptions({
      corporateEra: true,
      preludeExtension: false,
      venusNextExtension: false,
      coloniesExtension: false,
      turmoilExtension: false,
      promoCardsOption: false,
      communityCardsOption: false,
      aresExtension: false,
    });
    expect(new GameCards(gameOptions).getProjectCards().length)
      .to.eq(208);

    // exclude corporate era
    gameOptions.corporateEra = false;
    expect(new GameCards(gameOptions).getProjectCards().length)
      .to.eq(137);
  });

  it('excludes expansion-specific preludes if those expansions are not selected ', function() {
    const gameOptions = setCustomGameOptions({
      corporateEra: true,
      preludeExtension: false,
      venusNextExtension: false,
      coloniesExtension: false,
      turmoilExtension: false,
      promoCardsOption: false,
      communityCardsOption: true,
      aresExtension: false,
    });

    const preludeDeck = new GameCards(gameOptions).getPreludeCards();

    const turmoilPreludes: Array<CardName> = [];
    COMMUNITY_CARD_MANIFEST.preludeCards.factories.forEach((cf) => turmoilPreludes.push(cf.cardName));
    turmoilPreludes.forEach((preludeName) => {
      const preludeCard = new CardFinder().getPreludeByName(preludeName)!;
      expect(preludeDeck.includes(preludeCard)).is.not.true;
    });
  });
});

