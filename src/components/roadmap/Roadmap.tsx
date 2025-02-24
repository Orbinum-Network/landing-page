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
            title: 'Core Blockchain & Nodes',
            time: '0-3 months',
            state: RoadmapState.PROGRESS,
            tasks: [
                'Develop the core blockchain using Substrate',
                'Implement NPoS and PoC consensus mechanisms',
                'Design and deploy the ON token with basic staking mechanics',
                'Set up the node infrastructure (Sentinel, Neural, Omni, Tensor)',
                'Initial testing of nodes and consensus mechanisms'
            ],
        },
        {
            phase: 'Node Test',
            title: 'Infrastructure Validation',
            time: '3 months',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Run performance and stability tests on nodes',
                'Adjust consensus mechanisms and security features',
                'Validate staking and initial governance setup'
            ],
        },
        {
            phase: 'Phase 2',
            title: 'AI Infrastructure',
            time: '3-6 months',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Implement the Federated Learning Framework',
                'Develop the Distributed Model Sharding Framework (DMSF)',
                'Integrate basic privacy mechanisms and cryptographic signatures',
                'Deploy initial AI model training on Neural and Tensor Nodes'
            ],
        },
        {
            phase: 'AI Test',
            title: 'AI Model Validation',
            time: '6 months',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Evaluate the performance of distributed AI training',
                'Optimize model storage and retrieval',
                'Verify security and quality of data contributions'
            ],
        },
        {
            phase: 'Phase 3',
            title: 'Optimization & Growth',
            time: '6-12 months',
            state: RoadmapState.NOT_STARTED,
            tasks: [
                'Enhance scalability with advanced sharding techniques',
                'Optimize incentives and tokenomics based on real usage',
                'Integrate with Polkadot for interoperability',
                'Expand network adoption and increase node participation'
            ],
        }
    ];


    return (
        <SectionLayout>
            <SectionTitle title="Track Our Development" titleTwo="Follow Our Roadmap" />
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
                                                        <p className="font-medium text-secondary-100 mr-2">{phase.phase}</p>
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