import {Game} from '../../../src/server/Game';
import {Player} from '../../../src/server/Player';
import {setCustomGameOptions} from '../../TestingUtils';
import {TestPlayer} from '../../TestPlayer';
import {expect} from 'chai';
import {MoonColonyStandardProjectVariant2, MoonMineStandardProjectVariant2, MoonRoadStandardProjectVariant2} from '../../../src/server/cards/moon/MoonStandardProjectVariants';

const MOON_OPTIONS = setCustomGameOptions({moonExpansion: true});

describe('MoonStandardProjectVariants', () => {
  let player: Player;

  beforeEach(() => {
    player = TestPlayer.BLUE.newPlayer();
    Game.newInstance('gameid', [player], player, MOON_OPTIONS);
  });

  describe('MoonColonyStandardProjectVariant2', () => {
    it('can act', () => {
      const card = new MoonColonyStandardProjectVariant2();
      player.titanium = 1;
      player.megaCredits = 22;
      expect(player.canPlay(card)).is.false;

      player.titanium = 0;
      player.megaCredits = 25;
      expect(player.canPlay(card)).is.false;

      player.titanium = 0;
      player.megaCredits = 26;
      expect(player.canPlay(card)).is.true;
    });
  });

  describe('MoonMineStandardProjectVariant2', () => {
    it('can act', () => {
      const card = new MoonMineStandardProjectVariant2();
      player.titanium = 1;
      player.megaCredits = 20;
      expect(player.canPlay(card)).is.false;

      player.titanium = 0;
      player.megaCredits = 22;
      expect(player.canPlay(card)).is.false;

      player.titanium = 0;
      player.megaCredits = 23;
      expect(player.canPlay(card)).is.true;
    });
  });

  describe('MoonRoadStandardProjectVariant2', () => {
    it('can act', () => {
      const card = new MoonRoadStandardProjectVariant2();
      player.titanium = 1;
      player.megaCredits = 18;
      expect(player.canPlay(card)).is.false;

      player.titanium = 0;
      player.megaCredits = 20;
      expect(player.canPlay(card)).is.false;

      player.titanium = 0;
      player.megaCredits = 21;
      expect(player.canPlay(card)).is.true;
    });
  });
});

