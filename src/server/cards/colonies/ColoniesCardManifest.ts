import {CardName} from '../../../common/cards/CardName';
import {CardManifest} from '../CardManifest';
import {Airliners} from './Airliners';
import {AirRaid} from './AirRaid';
import {Aridor} from './Aridor';
import {Arklight} from './Arklight';
import {AtmoCollectors} from './AtmoCollectors';
import {CommunityServices} from './CommunityServices';
import {Conscription} from './Conscription';
import {CoronaExtractor} from './CoronaExtractor';
import {CryoSleep} from './CryoSleep';
import {EarthElevator} from './EarthElevator';
import {EcologyResearch} from './EcologyResearch';
import {FloaterLeasing} from './FloaterLeasing';
import {FloaterPrototypes} from './FloaterPrototypes';
import {FloaterTechnology} from './FloaterTechnology';
import {GalileanWaystation} from './GalileanWaystation';
import {HeavyTaxation} from './HeavyTaxation';
import {IceMoonColony} from './IceMoonColony';
import {ImpactorSwarm} from './ImpactorSwarm';
import {InterplanetaryColonyShip} from './InterplanetaryColonyShip';
import {JovianLanterns} from './JovianLanterns';
import {JupiterFloatingStation} from './JupiterFloatingStation';
import {LunaGovernor} from './LunaGovernor';
import {LunarExports} from './LunarExports';
import {LunarMining} from './LunarMining';
import {MarketManipulation} from './MarketManipulation';
import {MartianZoo} from './MartianZoo';
import {MiningColony} from './MiningColony';
import {MinorityRefuge} from './MinorityRefuge';
import {MolecularPrinting} from './MolecularPrinting';
import {NitrogenFromTitan} from './NitrogenFromTitan';
import {PioneerSettlement} from './PioneerSettlement';
import {Polyphemos} from './Polyphemos';
import {Poseidon} from './Poseidon';
import {ProductiveOutpost} from './ProductiveOutpost';
import {QuantumCommunications} from './QuantumCommunications';
import {RedSpotObservatory} from './RedSpotObservatory';
import {RefugeeCamps} from './RefugeeCamps';
import {ResearchColony} from './ResearchColony';
import {RimFreighters} from './RimFreighters';
import {SkyDocks} from './SkyDocks';
import {SolarProbe} from './SolarProbe';
import {SolarReflectors} from './SolarReflectors';
import {SpacePort} from './SpacePort';
import {SpacePortColony} from './SpacePortColony';
import {SpinoffDepartment} from './SpinoffDepartment';
import {StormCraftIncorporated} from './StormCraftIncorporated';
import {SubZeroSaltFish} from './SubZeroSaltFish';
import {TitanAirScrapping} from './TitanAirScrapping';
import {TitanFloatingLaunchPad} from './TitanFloatingLaunchPad';
import {TitanShuttles} from './TitanShuttles';
import {TradeEnvoys} from './TradeEnvoys';
import {TradingColony} from './TradingColony';
import {UrbanDecomposers} from './UrbanDecomposers';
import {WarpDrive} from './WarpDrive';
import {BuildColonyStandardProject} from './BuildColonyStandardProject';

export const COLONIES_CARD_MANIFEST = new CardManifest({
  module: 'colonies',

  projectCards: [
    {cardName: CardName.AIRLINERS, Factory: Airliners},
    {cardName: CardName.AIR_RAID, Factory: AirRaid},
    {cardName: CardName.ATMO_COLLECTORS, Factory: AtmoCollectors},
    {cardName: CardName.COMMUNITY_SERVICES, Factory: CommunityServices},
    {cardName: CardName.CONSCRIPTION, Factory: Conscription},
    {cardName: CardName.CORONA_EXTRACTOR, Factory: CoronaExtractor},
    {cardName: CardName.CRYO_SLEEP, Factory: CryoSleep},
    {cardName: CardName.EARTH_ELEVATOR, Factory: EarthElevator},
    {cardName: CardName.ECOLOGY_RESEARCH, Factory: EcologyResearch},
    {cardName: CardName.FLOATER_LEASING, Factory: FloaterLeasing},
    {cardName: CardName.FLOATER_PROTOTYPES, Factory: FloaterPrototypes},
    {cardName: CardName.FLOATER_TECHNOLOGY, Factory: FloaterTechnology},
    {cardName: CardName.GALILEAN_WAYSTATION, Factory: GalileanWaystation},
    {cardName: CardName.HEAVY_TAXATION, Factory: HeavyTaxation},
    {cardName: CardName.ICE_MOON_COLONY, Factory: IceMoonColony},
    {cardName: CardName.IMPACTOR_SWARM, Factory: ImpactorSwarm},
    {cardName: CardName.INTERPLANETARY_COLONY_SHIP, Factory: InterplanetaryColonyShip},
    {cardName: CardName.JOVIAN_LANTERNS, Factory: JovianLanterns},
    {cardName: CardName.JUPITER_FLOATING_STATION, Factory: JupiterFloatingStation},
    {cardName: CardName.LUNA_GOVERNOR, Factory: LunaGovernor},
    {cardName: CardName.LUNAR_EXPORTS, Factory: LunarExports},
    {cardName: CardName.LUNAR_MINING, Factory: LunarMining},
    {cardName: CardName.MARTIAN_ZOO, Factory: MartianZoo},
    {cardName: CardName.MARKET_MANIPULATION, Factory: MarketManipulation},
    {cardName: CardName.MINING_COLONY, Factory: MiningColony},
    {cardName: CardName.MINORITY_REFUGE, Factory: MinorityRefuge},
    {cardName: CardName.MOLECULAR_PRINTING, Factory: MolecularPrinting},
    {cardName: CardName.NITROGEN_FROM_TITAN, Factory: NitrogenFromTitan},
    {cardName: CardName.PIONEER_SETTLEMENT, Factory: PioneerSettlement},
    {cardName: CardName.PRODUCTIVE_OUTPOST, Factory: ProductiveOutpost},
    {cardName: CardName.QUANTUM_COMMUNICATIONS, Factory: QuantumCommunications},
    {cardName: CardName.RED_SPOT_OBSERVATORY, Factory: RedSpotObservatory},
    {cardName: CardName.RESEARCH_COLONY, Factory: ResearchColony},
    {cardName: CardName.RIM_FREIGHTERS, Factory: RimFreighters},
    {cardName: CardName.REFUGEE_CAMP, Factory: RefugeeCamps},
    {cardName: CardName.SOLAR_PROBE, Factory: SolarProbe},
    {cardName: CardName.SOLAR_REFLECTORS, Factory: SolarReflectors},
    {cardName: CardName.SKY_DOCKS, Factory: SkyDocks},
    {cardName: CardName.SPACE_PORT, Factory: SpacePort},
    {cardName: CardName.SPACE_PORT_COLONY, Factory: SpacePortColony},
    {cardName: CardName.SPINOFF_DEPARTMENT, Factory: SpinoffDepartment},
    {cardName: CardName.SUBZERO_SALT_FISH, Factory: SubZeroSaltFish},
    {cardName: CardName.TITAN_AIRSCRAPPING, Factory: TitanAirScrapping},
    {cardName: CardName.TITAN_FLOATING_LAUNCHPAD, Factory: TitanFloatingLaunchPad},
    {cardName: CardName.TITAN_SHUTTLES, Factory: TitanShuttles},
    {cardName: CardName.TRADING_COLONY, Factory: TradingColony},
    {cardName: CardName.TRADE_ENVOYS, Factory: TradeEnvoys},
    {cardName: CardName.URBAN_DECOMPOSERS, Factory: UrbanDecomposers},
    {cardName: CardName.WARP_DRIVE, Factory: WarpDrive},
  ],
  standardProjects: [
    {cardName: CardName.BUILD_COLONY_STANDARD_PROJECT, Factory: BuildColonyStandardProject},
  ],
  corporationCards: [
    {cardName: CardName.ARIDOR, Factory: Aridor, compatibility: 'colonies'},
    {cardName: CardName.ARKLIGHT, Factory: Arklight},
    {cardName: CardName.POLYPHEMOS, Factory: Polyphemos},
    {cardName: CardName.POSEIDON, Factory: Poseidon, compatibility: 'colonies'},
    {cardName: CardName.STORMCRAFT_INCORPORATED, Factory: StormCraftIncorporated},
  ]});
