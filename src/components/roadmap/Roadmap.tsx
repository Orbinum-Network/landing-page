import { SectionLayout } from "@/layout";
import { Divider, SectionTitle } from "../common";
import { Icon } from "@iconify/react";

enum RoadmapState {
    PROGRESS = 'PROGRESS',
    NOT_STARTED = 'NOT_STARTED',
    FINISHED = 'FINISHED'
}

interface RoadmapIconsTypes {
    ICON: string;
    COLOR: string;
}

const RoadmapIcons: { [key in RoadmapState]: RoadmapIconsTypes } = {
    [RoadmapState.PROGRESS]: {
        ICON: 'basil:sand-watch-solid',
        COLOR: 'yellow'
    },
    [RoadmapState.NOT_STARTED]: {
        ICON: '',
        COLOR: 'secondary'
    },
    [RoadmapState.FINISHED]: {
        ICON: 'material-symbols:check',
        COLOR: 'green'
    }
};

export const Roadmap = () => {
    const phases = [
        {
            phase: 'Phase 1',
            title: 'Blockchain Test Network with NPoS',
            time: 'Q1 + Q2 (2025)',
            state: RoadmapState.PROGRESS,
            tasks: [
                'Develop core blockchain test network using Substrate',
                'Implement NPoS consensus mechanism',
                'Deploy initial test version of the ON token with basic staking',
                'Set up basic node infrastructure for testing',
                'Initial testing of the blockchain and NPoS consensus',
            ],
        },
        {
            phase: 'Phase 2',
            title: 'Distributed Model Sharding & Proof-of-Contribution Test',
            time: 'Q2 - Q3 (2025)',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Develop the Distributed Model Sharding Framework (DMSF)',
                'Implement Proof-of-Contribution (PoC) consensus mechanism for testing',
                'Integrate basic data privacy features',
                'Test DMSF functionality and PoC mechanism',
                'Validate initial node participation and contribution flow',
            ],
        },
        {
            phase: 'Federated learning Test',
            title: 'Federated Learning Testing',
            time: 'Q3 + Q4 (2025)',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Implement the federated learning framework',
                'Integrate cryptographic signatures for model validation',
                'Conduct initial distributed AI model training tests',
                'Evaluate performance and privacy aspects of federated learning',
            ],
        },
        {
            phase: 'Combined Infrastructure Test',
            title: 'Integrated Blockchain & AI Infrastructure Testing',
            time: 'Q4 (2025) + Q1 (2026)',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Test the integrated functionality of NPoS, PoC, DMSF, and Federated Learning',
                'Evaluate overall network stability and performance',
                'Refine incentive mechanisms based on test results',
                'Test basic governance functionalities',
            ],
        },
        {
            phase: 'Optimization & Preparation for Mainnet',
            title: 'Network Optimization & Mainnet Readiness',
            time: 'Q1 - Q2 (2026)',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Optimize scalability and security features',
                'Finalize tokenomics and governance structure',
                'Prepare for Polkadot integration',
                'Conduct final testing and audits',
                'Plan for mainnet launch and community onboarding',
            ],
        },
    ];


    return (
        <SectionLayout>
            <SectionTitle styleColor="black" sectionType="Roadmap" title="Track Our Development" titleTwo="Follow Our Roadmap" />
            <Divider />
            <div className="max-w-xl mx-auto mt-8 p-8 border border-secondary-800 rounded-3xl">
                <div className="flow-root">
                    <ul className="-mb-8">
                        {
                            phases.map(phase => (
                                <li>
                                    <div className="relative pb-8">
                                        <span className="absolute left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                        <div className="relative flex items-start space-x-3 ">
                                            <div className="relative px-1">
                                                <div className={`h-8 w-8 bg-${RoadmapIcons[phase.state as RoadmapState].COLOR}-500 rounded-full ring-2 ring-secondary-200 flex items-center justify-center`}>
                                                    {RoadmapIcons[phase.state as RoadmapState].ICON ? (
                                                        <Icon icon={RoadmapIcons[phase.state as RoadmapState].ICON} width={24} height={24} />
                                                    ) : (
                                                        null
                                                    )}
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1 py-0">
                                                <div className="text-md text-gray-500">
                                                    <div className="flex gap-2 items-center">
                                                        {/* <p className="font-medium text-secondary-100 mr-2">{phase.phase}</p> */}
                                                        <p className="my-0.5 relative inline-flex items-center bg-secondary-700 rounded-full ring ring-secondary-600 px-3 py-0.5 text-sm">
                                                            <div className="absolute flex items-center justify-center size-3">
                                                                <span className={`
                                                                     rounded-full inline-flex
                                                                    ${phase.state === RoadmapState.FINISHED ?
                                                                        'bg-green-500 size-2' : phase.state === RoadmapState.PROGRESS ? 'size-2 bg-yellow-500 animate-ping' : 'size-2 bg-secondary-500'}`
                                                                } aria-hidden="true"></span>
                                                                {
                                                                    phase.state === RoadmapState.PROGRESS &&
                                                                    <span className="absolute inline-flex size-2 rounded-full bg-yellow-500"></span>
                                                                }
                                                            </div>
                                                            <div className="ml-3.5 font-medium text-secondary-100">{phase.title}</div>
                                                        </p>
                                                    </div>
                                                    <span className="whitespace-nowrap text-sm text-secondary-400">{phase.time}</span>
                                                </div>
                                                <div className="mt-2 text-secondary-300">
                                                    {phase.tasks.map(task => (
                                                        <p>- {task}</p>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionLayout>

    );
};