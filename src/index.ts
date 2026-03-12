import { TweenService, RunService, Workspace, Players, PhysicsService, HttpService } from "@rbxts/services";
import { Signal } from "@rbxts/beacon"

type AttachmentInfo = {
    TakeoverTitle: string;
    Offset: CFrame;
}

type SocketConstraintInfo = {
    Attachment0Info: AttachmentInfo;
    Attachment1Info: AttachmentInfo;
    Restitution: number;
    MaxFrictionTorque: number;
    LimitsEnabled: boolean;
    TwistLimitsEnabled: boolean;
    UpperAngle: number;
    TwistUpperAngle: number;
    TwistLowerAngle: number;
}

type HingeConstraintInfo = {
    Attachment0Info: AttachmentInfo;
    Attachment1Info: AttachmentInfo;
    Restitution: number;
    LimitsEnabled: boolean;
    UpperAngle: number;
    LowerAngle: number;
}

type WeldConstraintInfo = {
    Part0Title: string;
    Part1Title: string;
}

class _r6J {
    static RightShoulder: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "Torso",
            Offset: new CFrame(1.00019073, 0.879000187, -0.000190734863, 0, 0, 1, 0, 1, -0, -1, 0, 0)
        },
        Attachment1Info: {
            TakeoverTitle: "Right Arm",
            Offset: new CFrame(-0.499907017, 0.879375935, -0.000343322754, 5.64381423e-07, 0.00116295868, 0.999999404, 0.00033581481, 0.999999285, -0.00116295891, -1, 0.000335815246, 1.73842267e-07)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 90,
        TwistUpperAngle: 45,
        TwistLowerAngle: -45
    };
    static LeftShoulder: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "Torso",
            Offset: new CFrame(-1.00031185, 0.893874645, 0.00327682495, 5.77419996e-08, -0.0014789335, 0.999998927, 0.00195833528, 0.99999702, 0.00147893059, -0.999998093, 0.00195833319, 2.95398945e-06)
        },
        Attachment1Info: {
            TakeoverTitle: "Left Arm",
            Offset: new CFrame(0.494401991, 0.894001007, 0.00263214111, 9.31322575e-10, -7.08860171e-09, 1, -9.31322575e-10, 1, 7.08860171e-09, -1, -9.31322575e-10, 9.31322575e-10)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 90,
        TwistUpperAngle: 45,
        TwistLowerAngle: -45
    };
    static LeftHip: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "Torso",
            Offset: new CFrame(-0.499999762, -1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
        },
        Attachment1Info: {
            TakeoverTitle: "Left Leg",
            Offset: new CFrame(2.38418579e-07, 1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 90,
        TwistUpperAngle: 45,
        TwistLowerAngle: -45
    };
    static RightHip: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "Torso",
            Offset: new CFrame(0.500000238, -1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
        },
        Attachment1Info: {
            TakeoverTitle: "Right Leg",
            Offset: new CFrame(2.38418579e-07, 1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 90,
        TwistUpperAngle: 45,
        TwistLowerAngle: -45
    };
    static Neck: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "Torso",
            Offset: new CFrame(2.38418579e-07, 1, 0, 0, 0, 1, 0, 1, -0, -1, 0, 0)
        },
        Attachment1Info: {
            TakeoverTitle: "Head",
            Offset: new CFrame(2.38418579e-07, -0.5, 0, 0, -0.0012902373, 0.999999166, 0.00128811458, 0.999998331, 0.00129023625, -0.999999166, 0.00128811353, 1.66197344e-06)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 45,
        TwistUpperAngle: 45,
        TwistLowerAngle: -45
    };
    static Root: WeldConstraintInfo = {
        Part0Title: "HumanoidRootPart",
        Part1Title: "Torso"
    };
}

class _r15J {
    static LeftWrist: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "LeftLowerArm",
            Offset: new CFrame(0, -0.600000143, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Attachment1Info: {
            TakeoverTitle: "LeftHand",
            Offset: new CFrame(0, 0.100000001, 0, 0, -5.96046448e-08, 1, -1, 0, 0, 0, -1, -5.96046448e-08)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 15,
        TwistUpperAngle: 1,
        TwistLowerAngle: -1
    };
    static RightWrist: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "RightLowerArm",
            Offset: new CFrame(0, -0.600000143, -0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Attachment1Info: {
            TakeoverTitle: "RightHand",
            Offset: new CFrame(0, 0.100000001, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 45,
        TwistUpperAngle: 1,
        TwistLowerAngle: -1
    };
    static LeftElbow: HingeConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "LeftUpperArm",
            Offset: new CFrame(0, -0.230000004, 0, -1, -5.96046377e-08, 0, 5.96046377e-08, -1, 0, 0, 0, 1)
        },
        Attachment1Info: {
            TakeoverTitle: "LeftLowerArm",
            Offset: new CFrame(0, 0.219999999, 0, -1, -5.96046377e-08, 0, 5.96046377e-08, -1, 0, 0, 0, 1)
        },
        Restitution: 0,
        LimitsEnabled: true,
        UpperAngle: 0,
        LowerAngle: -120
    };
    static RightElbow: HingeConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "RightUpperArm",
            Offset: new CFrame(0, -0.230000004, 0, -1, 8.74227766e-08, 0, -8.74227766e-08, -1, 0, 0, 0, 1)
        },
        Attachment1Info: {
            TakeoverTitle: "RightLowerArm",
            Offset: new CFrame(0, 0.219999999, 0, -1, 8.74227766e-08, 0, -8.74227766e-08, -1, 0, 0, 0, 1)
        },
        Restitution: 0,
        LimitsEnabled: true,
        UpperAngle: 0,
        LowerAngle: -120
    };
    static LeftAnkle: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "LeftLowerLeg",
            Offset: new CFrame(0, -0.750000179, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Attachment1Info: {
            TakeoverTitle: "LeftFoot",
            Offset: new CFrame(0, 0.100000001, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 15,
        TwistUpperAngle: 5,
        TwistLowerAngle: -5
    };
    static LeftShoulder: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "UpperTorso",
            Offset: new CFrame(-1.5, 0.350312829, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1)
        },
        Attachment1Info: {
            TakeoverTitle: "LeftUpperArm",
            Offset: new CFrame(0, 0.25, 0, -1, 0, 0, 0, 1, 0, 0, 0, -1)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 45,
        TwistUpperAngle: 180,
        TwistLowerAngle: -90
    };
    static Neck: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "UpperTorso",
            Offset: new CFrame(0, 0.800000072, 0, 0, 5.96046377e-08, -1, 1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Attachment1Info: {
            TakeoverTitle: "Head",
            Offset: new CFrame(0, -0.5, 0, 0, 5.96046377e-08, -1, 1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 30,
        TwistUpperAngle: 45,
        TwistLowerAngle: -45
    };
    static RightShoulder: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "UpperTorso",
            Offset: new CFrame(1.5, 0.349999994, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1)
        },
        Attachment1Info: {
            TakeoverTitle: "RightUpperArm",
            Offset: new CFrame(0, 0.25, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 45,
        TwistUpperAngle: 180,
        TwistLowerAngle: -90
    };
    static LeftKnee: HingeConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "LeftUpperLeg",
            Offset: new CFrame(0, -0.300000012, 0, -1, 0, 0, 0, -1, 5.96046377e-08, 0, 5.96046377e-08, 1)
        },
        Attachment1Info: {
            TakeoverTitle: "LeftLowerLeg",
            Offset: new CFrame(0, 0.25, 0, -1, 0, 0, 0, -1, -8.9406953e-08, 0, -8.9406953e-08, 1)
        },
        Restitution: 0,
        LimitsEnabled: true,
        UpperAngle: 120,
        LowerAngle: 0
    };
    static RightAnkle: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "RightLowerLeg",
            Offset: new CFrame(0, -0.750000179, 0, 0, -4.37113883e-08, 1, -1, 0, 0, -0, -1, -4.37113883e-08)
        },
        Attachment1Info: {
            TakeoverTitle: "RightFoot",
            Offset: new CFrame(0, 0.100000001, 0, 0, -4.37113883e-08, 1, -1, 0, 0, -0, -1, -4.37113883e-08)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 5,
        TwistUpperAngle: 5,
        TwistLowerAngle: -5
    };
    static Waist: HingeConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "LowerTorso",
            Offset: new CFrame(0, 0.199999988, 0, 1, 5.96046377e-08, -0, -5.96046377e-08, 1, 0, 0, 0, 1)
        },
        Attachment1Info: {
            TakeoverTitle: "UpperTorso",
            Offset: new CFrame(0, -0.800000072, 0, 1, 5.96046377e-08, -0, -5.96046377e-08, 1, 0, 0, 0, 1)
        },
        Restitution: 0,
        LimitsEnabled: true,
        UpperAngle: 15,
        LowerAngle: -60
    };
    static LeftHip: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "LowerTorso",
            Offset: new CFrame(-0.5, -0.5, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Attachment1Info: {
            TakeoverTitle: "LeftUpperLeg",
            Offset: new CFrame(0, 0.200000003, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 30,
        TwistUpperAngle: 30,
        TwistLowerAngle: -30
    };
    static RightHip: SocketConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "LowerTorso",
            Offset: new CFrame(0.5, -0.5, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Attachment1Info: {
            TakeoverTitle: "RightUpperLeg",
            Offset: new CFrame(0, 0.200000003, 0, 0, -5.96046377e-08, 1, -1, 0, 0, 0, -1, -5.96046377e-08)
        },
        Restitution: 0,
        MaxFrictionTorque: 0,
        LimitsEnabled: true,
        TwistLimitsEnabled: true,
        UpperAngle: 30,
        TwistUpperAngle: 30,
        TwistLowerAngle: -30
    };
    static RightKnee: HingeConstraintInfo = {
        Attachment0Info: {
            TakeoverTitle: "RightUpperLeg",
            Offset: new CFrame(0, -0.300000012, 0, -1, 0, 0, 0, -1, 5.96046448e-08, 0, 5.96046448e-08, 1)
        },
        Attachment1Info: {
            TakeoverTitle: "RightLowerLeg",
            Offset: new CFrame(0, 0.25, 0, -1, 0, 0, 0, -1, -5.96046519e-08, 0, -5.96046519e-08, 1)
        },
        Restitution: 0,
        LimitsEnabled: true,
        UpperAngle: 120,
        LowerAngle: 0
    };
    static Root: WeldConstraintInfo = {
        Part0Title: "HumanoidRootPart",
        Part1Title: "LowerTorso"
    };
}

type SocketJointCreationInfo = {
    Part0: BasePart;
    Part1: BasePart;
    Info: SocketConstraintInfo;
}

type HingeJointCreationInfo = {
    Part0: BasePart;
    Part1: BasePart;
    Info: HingeConstraintInfo;
}

type WeldJointCreationInfo = {
    Part0: BasePart;
    Part1: BasePart;
    Info: WeldConstraintInfo;
}

type JointDestructionInfo = {
    Attachment0: Attachment | undefined;
    Attachment1: Attachment | undefined;
    Constraint: BallSocketConstraint | HingeConstraint | WeldConstraint;
    NoCol: NoCollisionConstraint | undefined;
    Replaced: Motor6D;
}

/** 
 * Interface representing an active ragdoll instance. Users receive pre-constructed instances from {@linkcode Falldown.RagdollCharacter}.
 * @interface
 * @see {@linkcode Falldown}
 * @see {@linkcode Falldown.RagdollCharacter}
 */
export interface IActiveRagdoll {
    /** The character `Model` that is currently ragdolled. */
    readonly Character: Model;
    
    /** The `Humanoid` instance of the ragdolled character. */
    readonly Humanoid: Humanoid;
    
    /** Signal that fires when the ragdoll is destroyed. Fires after character removal, manual {@linkcode Destroy} call, or automatic duration expiry.
     * @see {@linkcode IActiveRagdoll.Destroy}
     */
    readonly Destroyed: Signal<void>;
    
    /** Signal that fires when the ragdoll's getup animation completes and the character is restored to normal control. Fires before {@linkcode Destroyed}.
     * @see {@linkcode IActiveRagdoll.Destroyed}
     */
    readonly Ended: Signal<void>;
    
    /** 
     * Applies velocity to the ragdolled character using different distribution modes.
     * @param velocity - The velocity vector to apply (in studs/second)
     * @param mode - The velocity distribution mode from {@linkcode Falldown.VelocityMode}
     * @see {@linkcode Falldown.VelocityMode}
     * @see {@linkcode IActiveRagdoll.AddRandomVelocity}
     */
    AddVelocity(velocity: Vector3, mode: (typeof Falldown.VelocityMode)[keyof typeof Falldown.VelocityMode]): void;
    
    /** 
     * Applies random velocity to each body part independently in all directions. Each part receives random velocity with components in range `[-maxVelocity, maxVelocity]`.
     * @param maxVelocity - Maximum velocity magnitude for each axis (in studs/second)
     * @see {@linkcode IActiveRagdoll.AddVelocity}
     */
    AddRandomVelocity(maxVelocity: number): void;
    
    /** 
     * Manually ends the ragdoll state and restores the character to normal control. Plays the appropriate getup animation, removes ragdoll constraints, positions character upright, and fires {@linkcode Ended} and {@linkcode Destroyed} signals.
     * @see {@linkcode IActiveRagdoll.Ended}
     * @see {@linkcode IActiveRagdoll.Destroyed}
     * @see {@linkcode Falldown.UnragdollCharacter}
     */
    Destroy(exitMode: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode]): void;
}

class ActiveRagdoll implements IActiveRagdoll {
    /** Signal that fires when the ragdoll is destroyed. Fires after character removal, manual {@linkcode Destroy} call, or automatic duration expiry.
     * @see {@linkcode ActiveRagdoll.Destroy}
     * @see {@linkcode ActiveRagdoll.Ended}
     */
    public readonly Destroyed = new Signal<void>();
    
    /** Signal that fires when the ragdoll's getup animation completes and the character is restored to normal control. Fires before {@linkcode Destroyed}.
     * @see {@linkcode ActiveRagdoll.Destroyed}
     */
    public readonly Ended = new Signal<void>();
    
    /** Indicates whether the character has died. Set to `true` when the Humanoid's health reaches 0 or the character is destroyed. When `true`, {@linkcode Destroy} will not function unless called from automatic duration expiry. */
    public CharacterDead: boolean;

    /** The `Player` that owns this character, or `undefined` if the character is not owned by a player (e.g., NPCs). */
    public readonly Owner: Player | undefined;
    
    /** The character `Model` that is currently ragdolled. */
    public readonly Character: Model;
    
    /** The `Humanoid` instance of the ragdolled character. */
    public readonly Humanoid: Humanoid;
    
    /** The HumanoidRootPart of the ragdolled character. Primary reference point for ragdoll physics. */
    public readonly HumanoidRootPart: BasePart;
    
    /** The left foot part used for ground detection when standing up. Either "LeftFoot" (R15) or "Left Leg" (R6). */
    public readonly LeftTouchPart: BasePart;
    
    /** The right foot part used for ground detection when standing up. Either "RightFoot" (R15) or "Right Leg" (R6). */
    public readonly RightTouchPart: BasePart;

    /** The loaded `AnimationTrack` for the getup-from-front animation (belly down), or `undefined` if no animation was provided. */
    public readonly GetupFrontAnimation: AnimationTrack | undefined;
    
    /** The loaded `AnimationTrack` for the getup-from-back animation (back down), or `undefined` if no animation was provided. */
    public readonly GetupBackAnimation: AnimationTrack | undefined;

    private readonly _automaticDuration: number | undefined;
    private readonly _jointDestructionInfo: JointDestructionInfo[];
    private readonly _proxyGroupId: string;
    private readonly _bodypartGroupId: string;
    private readonly _proxyMapping: Map<string, BasePart>;
    private readonly _objectiveHeight: number;
    private readonly _standFadeTime: number;

    constructor(character: Model, objectiveHeight: number, standFadeTime: number, humanoid: Humanoid, humanoidRootPart: BasePart, leftTouchObj: BasePart, rightTouchObj: BasePart, jointDestructionInfo: JointDestructionInfo[], proxyGroupId: string, bodypartGroupId: string, proxyMapping: Map<string, BasePart>, automaticDuration: number | undefined, exitMode: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode] | undefined, getupFront: AnimationTrack | undefined, getupBack: AnimationTrack | undefined) {
        character.Destroying.Once(() => {
            this.CharacterDead = true;
            this._jointDestructionInfo.clear();
            this.Destroyed.Fire();
            this.Destroyed.Destroy();
            this.Ended.Destroy();
        });

        humanoid.Died.Once(() => {
            this.CharacterDead = true;
        });
        
        this.CharacterDead = humanoid.Health <= 0;
        
        this.Owner = Players.GetPlayerFromCharacter(character);
        this.Character = character;
        this.Humanoid = humanoid;
        this.HumanoidRootPart = humanoidRootPart;
        this.LeftTouchPart = leftTouchObj;
        this.RightTouchPart = rightTouchObj;

        this.GetupFrontAnimation = getupFront;
        this.GetupBackAnimation = getupBack;

        if (getupFront) {
            getupFront.Play(0, 1, 0);
            getupFront.Stop();
        }

        if (getupBack) {
            getupBack.Play(0, 1, 0);
            getupBack.Stop();
        }

        this._automaticDuration = automaticDuration;
        this._jointDestructionInfo = jointDestructionInfo;
        this._proxyGroupId = proxyGroupId;
        this._bodypartGroupId = bodypartGroupId;
        this._proxyMapping = proxyMapping;
        this._objectiveHeight = objectiveHeight;
        this._standFadeTime = standFadeTime;

        if (this._automaticDuration && !this.CharacterDead) {
            delay(this._automaticDuration, () => {
                this.Destroy(exitMode || Falldown.ExitMode.Smooth);
            });
        }
    }

    private static GetVerticalDirection(dir: Vector3): number {
        const unitDir = dir.Unit;

        const dotUp = unitDir.Dot(Vector3.yAxis);
        const dotDown = unitDir.Dot(Vector3.yAxis.mul(-1));

        if (dotUp > dotDown) {
            return 0;
        } else {
            return 1;
        }
    }

    /** 
     * Applies velocity to the ragdolled character using different distribution modes.
     * @param velocity - The velocity vector to apply (in studs/second)
     * @param mode - The velocity distribution mode from {@linkcode Falldown.VelocityMode}:
     * - `RootOnly`: Apply velocity only to HumanoidRootPart
     * - `AllEqual`: Apply full velocity to every body part
     * - `SplitEqual`: Distribute velocity evenly across all parts (magnitude divided by part count)
     * - `RandomMax`: Apply random velocity (0 to max magnitude) to each part in the same direction
     * @see {@linkcode Falldown.VelocityMode}
     * @see {@linkcode ActiveRagdoll.AddRandomVelocity}
     */
    public AddVelocity(velocity: Vector3, mode: (typeof Falldown.VelocityMode)[keyof typeof Falldown.VelocityMode]) {
        if (this.Character.Parent === undefined) {
            return;
        }

        if (this._jointDestructionInfo.isEmpty() || this._proxyMapping.isEmpty()) {
            return;
        }

        const velocityDirection = velocity.Unit;
        const velocityMagnitude = velocity.Magnitude;

        if (mode === Falldown.VelocityMode.RootOnly) {
            this.HumanoidRootPart.AssemblyLinearVelocity = this.HumanoidRootPart.AssemblyLinearVelocity.add(velocity);
        } else if (mode === Falldown.VelocityMode.AllEqual) {
            for (const descendant of this.Character.GetDescendants()) {
                if (descendant.IsA("BasePart")) {
                    descendant.AssemblyLinearVelocity = descendant.AssemblyLinearVelocity.add(velocity);
                }
            }
        } else if (mode === Falldown.VelocityMode.SplitEqual) {
            let counter = 0;
            for (const descendant of this.Character.GetDescendants()) {
                if (descendant.IsA("BasePart")) {
                    counter += 1;
                }
            }

            const perPartVelocity = velocityMagnitude / counter;
            const perPartVelocityVector = velocityDirection.mul(perPartVelocity);
            for (const descendant of this.Character.GetDescendants()) {
                if (descendant.IsA("BasePart")) {
                    descendant.AssemblyLinearVelocity = descendant.AssemblyLinearVelocity.add(perPartVelocityVector);
                }
            }
        } else if (mode === Falldown.VelocityMode.RandomMax) {
            for (const descendant of this.Character.GetDescendants()) {
                if (descendant.IsA("BasePart")) {
                    const randomFactor = math.random(0, velocityMagnitude);
                    const partVelocity = velocityDirection.mul(randomFactor);
                    descendant.AssemblyLinearVelocity = descendant.AssemblyLinearVelocity.add(partVelocity);
                }
            }
        } else {
            return error("Invalid velocity mode specified.");
        }
    }

    /** 
     * Applies random velocity to each body part independently in all directions. Each part receives random velocity with components in range `[-maxVelocity, maxVelocity]`. Useful for creating chaotic ragdoll effects like explosions.
     * @param maxVelocity - Maximum velocity magnitude for each axis (in studs/second)
     * @see {@linkcode ActiveRagdoll.AddVelocity}
     */
    public AddRandomVelocity(maxVelocity: number) {
        if (this.Character.Parent === undefined) {
            return;
        }

        if (this._jointDestructionInfo.isEmpty() || this._proxyMapping.isEmpty()) {
            return;
        }

        for (const descendant of this.Character.GetDescendants()) {
            if (descendant.IsA("BasePart")) {
                const randomVelocity = new Vector3(
                    math.random(-maxVelocity, maxVelocity),
                    math.random(-maxVelocity, maxVelocity),
                    math.random(-maxVelocity, maxVelocity)
                );

                descendant.AssemblyLinearVelocity = descendant.AssemblyLinearVelocity.add(randomVelocity);
            }
        }
    }

    /** 
     * Manually ends the ragdoll state and restores the character to normal control.
     * 
     * This method:
     * - Removes ragdoll constraints and restores Motor6Ds
     * - Plays the appropriate getup animation based on character orientation (front/back)
     * - Raycasts to find ground surface and aligns character upright to surface normal
     * - Creates a fade clone for smooth visual transition
     * - Re-enables Humanoid control and resets physics state
     * - Fires {@linkcode Ended} signal when animation completes
     * - Fires {@linkcode Destroyed} signal after cleanup
     * 
     * @param overrideDeathLock - Optional. If `true`, allows the ragdoll to end even if {@linkcode CharacterDead} is `true`. This is used internally for automatic duration expiry. Defaults to `false`.
     * @see {@linkcode ActiveRagdoll.Ended}
     * @see {@linkcode ActiveRagdoll.Destroyed}
     * @see {@linkcode Falldown.UnragdollCharacter}
     */
    public Destroy(exitMode: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode], overrideDeathLock?: boolean) {
        if (this.Character.Parent === undefined) {
            return;
        }

        if (this.CharacterDead && !overrideDeathLock) {
            return;
        }

        if (this._jointDestructionInfo.isEmpty() || this._proxyMapping.isEmpty()) {
            return;
        }

        // ── Shared: remove ragdoll constraints, restore Motor6Ds ──
        for (const info of this._jointDestructionInfo) {
            info.Replaced.Enabled = true;
            info.Constraint.Destroy();
            if (info.NoCol) {
                info.NoCol.Destroy();
            }
            if (info.Attachment0) {
                info.Attachment0.Destroy();
            }
            if (info.Attachment1) {
                info.Attachment1.Destroy();
            }
        }
        this._jointDestructionInfo.clear();

        for (const descendant of this.Character.GetDescendants()) {
            if (descendant.IsA("BasePart")) {
                if (descendant.CollisionGroup === this._bodypartGroupId) {
                    descendant.CollisionGroup = "Default";
                }

                descendant.AssemblyLinearVelocity = Vector3.zero;
				descendant.AssemblyAngularVelocity = Vector3.zero;
            }
        }

        // ── Shared: destroy proxy parts ──
        for (const [, proxyPart] of this._proxyMapping) {
            proxyPart.Destroy();
        }
        this._proxyMapping.clear();

        // ── Shared: raycast for ground & compute stand CFrame ──
        const leftToes = this.LeftTouchPart.CFrame.mul(new CFrame(0, -(this.LeftTouchPart.Size.Y / 2), 0));
		const rightToes = this.RightTouchPart.CFrame.mul(new CFrame(0, -(this.RightTouchPart.Size.Y / 2), 0));

        const castParams = new RaycastParams();
        castParams.FilterDescendantsInstances = [this.Character];
        castParams.FilterType = Enum.RaycastFilterType.Exclude;
        castParams.IgnoreWater = true;

		const nearStandPoint = leftToes.Position.Lerp(rightToes.Position, 0.5);
        const standCast = Workspace.Raycast(nearStandPoint.add(new Vector3(0, 5, 0)), new Vector3(0, -50, 0), castParams);
        const standPoint = standCast?.Position || nearStandPoint;
		const groundNormal = standCast?.Normal || Vector3.yAxis;
		const centerPoint = standPoint.add(groundNormal.mul(this._objectiveHeight));

        const gravity = new Vector3(0, -1, 0);
        const gDot = gravity.Dot(groundNormal);
        let downhill = gravity.sub(groundNormal.mul(gDot));
        const isSloped = downhill.Magnitude >= 0.05;
        if (downhill.Magnitude < 1e-3) {
            downhill = new Vector3(0, 0, 1);
        }
        downhill = downhill.Unit;

        const flatDirection = (() => {
            const head = this.Character.FindFirstChild("Head");
            const towardHead = (head && head.IsA("BasePart"))
                ? head.Position.sub(standPoint)
                : this.HumanoidRootPart.Position.sub(standPoint);

            const dot = towardHead.Dot(groundNormal);
            let along = towardHead.sub(groundNormal.mul(dot));
            if (along.Magnitude < 1e-3) {
                const look = this.HumanoidRootPart.CFrame.LookVector;
                const d = look.Dot(groundNormal);
                along = look.sub(groundNormal.mul(d));
            }
            if (along.Magnitude < 1e-3) {
                along = downhill;
            }

            if (isSloped && along.Dot(downhill) < 0) {
                along = along.mul(-1);
            }
            return along.Unit;
        })();

        let right = groundNormal.Cross(flatDirection);
        if (right.Magnitude < 1e-3) {
            right = groundNormal.Cross(Vector3.zAxis);
            if (right.Magnitude < 1e-3) right = groundNormal.Cross(Vector3.xAxis);
        }
        right = right.Unit;
        const forwardOnSurface = right.Cross(groundNormal).Unit;
        const targetCFrame = CFrame.fromMatrix(centerPoint, forwardOnSurface, groundNormal);

        if (exitMode === Falldown.ExitMode.Immediate) {
            // ── Immediate: snap character to standing pose, no clone or animation ──
            this.Character.PivotTo(targetCFrame);

            for (const descendant of this.Character.GetDescendants()) {
                if (descendant.IsA("BasePart")) {
                    descendant.Anchored = false;
                    descendant.AssemblyLinearVelocity = Vector3.zero;
                    descendant.AssemblyAngularVelocity = Vector3.zero;
                    if (descendant.GetAttribute("Falldown_Reverse_CC_To") !== undefined) {
                        descendant.CanCollide = descendant.GetAttribute("Falldown_Reverse_CC_To") as boolean;
                        descendant.SetAttribute("Falldown_Reverse_CC_To", undefined);
                    }
                }
            }

            this.Humanoid.PlatformStand = false;
            this.HumanoidRootPart.Anchored = false;

            this.Humanoid.EvaluateStateMachine = true;

            this.Humanoid.SetStateEnabled(Enum.HumanoidStateType.Jumping, true);
            this.Humanoid.SetStateEnabled(Enum.HumanoidStateType.GettingUp, true);

            this.Humanoid.ChangeState(Enum.HumanoidStateType.Running);

            task.defer(() => {
                while (this.Humanoid.MoveDirection.Magnitude <= 0) {
                    RunService.Stepped.Wait();
                }
                if (this.HumanoidRootPart.Anchored) {
                    return;
                }
                this.HumanoidRootPart.SetNetworkOwner(this.Owner);
            });

            this.Ended.Fire();
            this.Ended.Destroy();
        } else {
            // ── Smooth: create fade clone, play getup animation, tween ──
            const clonedCharacter = new Instance("Model");
            clonedCharacter.Name = "Falldown_FadeClone_Temp";

            const humanoid = new Instance("Humanoid");
            const animator = humanoid.FindFirstChildOfClass("Animator");
            humanoid.RigType = this.Humanoid.RigType;
            humanoid.RequiresNeck = false;
            humanoid.AutoRotate = false;
            if (animator) {
                for (const anim of animator.GetPlayingAnimationTracks()) {
                    anim.Stop();
                }
                animator.Destroy();
            }

            const cloneCG = HttpService.GenerateGUID(false);
            PhysicsService.RegisterCollisionGroup(cloneCG);
            PhysicsService.CollisionGroupSetCollidable(cloneCG, "Default", false);
            PhysicsService.CollisionGroupSetCollidable(cloneCG, this._bodypartGroupId, false);
            PhysicsService.CollisionGroupSetCollidable(cloneCG, cloneCG, false);

            const cloneToRealMap: Map<BasePart, BasePart> = new Map<BasePart, BasePart>();
            const originalTransparencies: Map<BasePart | Decal, number> = new Map<BasePart | Decal, number>();

            for (const descendant of this.Character.GetDescendants()) {
                if (descendant.IsA("BasePart")) {
                    const partClone = descendant.Clone();
                    partClone.Anchored = true;
                    partClone.CollisionGroup = cloneCG;
                    partClone.CFrame = descendant.CFrame;

                    cloneToRealMap.set(partClone, descendant);
                    originalTransparencies.set(descendant, descendant.Transparency);
                    for (const partDesc of partClone.GetDescendants()) {
                        if (partDesc.IsA("JointInstance") || partDesc.IsA("Constraint") || partDesc.IsA("Attachment")) {
                            partDesc.Destroy();
                        } else if (partDesc.IsA("Decal")) {
                            originalTransparencies.set(descendant.FindFirstChild(partDesc.Name) as Decal, partDesc.Transparency);
                        }
                    }

                    partClone.Parent = clonedCharacter;
                } else if (descendant.IsA("Clothing")) {
                    const clothingClone = descendant.Clone();
                    clothingClone.Parent = clonedCharacter;
                }
            }

            humanoid.Parent = clonedCharacter;
            clonedCharacter.Parent = Workspace;

            for (const [thing, originalTransparency] of originalTransparencies) {
                thing.Transparency = 1;
            }

            this.Humanoid.PlatformStand = false;
            this.Humanoid.ChangeState(Enum.HumanoidStateType.GettingUp);
            this.HumanoidRootPart.Anchored = true;

            const facing = ActiveRagdoll.GetVerticalDirection(this.HumanoidRootPart.CFrame.LookVector);
            let activeAnimation: AnimationTrack | undefined = undefined;

            if (facing === 0) {
                activeAnimation = this.GetupBackAnimation;
            } else {
                activeAnimation = this.GetupFrontAnimation;
            }

            task.spawn(() => {
                if (activeAnimation) {
                    this.Character.PivotTo(targetCFrame);
                    activeAnimation.Play(0, 1, 0);

                    while (!activeAnimation.IsPlaying) {
                        task.wait();
                    }

                    activeAnimation.TimePosition = 0.0;
                    task.wait();

                    let activeLerp = 0;
                    task.spawn(() => {
                        while (true) {
                            const dt = task.wait(1/60);
                            let lerpAlpha = activeLerp + (dt / math.min(this._standFadeTime, activeAnimation.Length));
                            let ended = false;
                            if (lerpAlpha >= 1) {
                                ended = true;
                                lerpAlpha = 1;
                            }

                            for (const [partClone, realPart] of cloneToRealMap) {
                                partClone.CFrame = partClone.CFrame.Lerp(realPart.CFrame, lerpAlpha);
                            }

                            activeLerp = lerpAlpha;
                            if (ended) {
                                for (const [partClone, realPart] of cloneToRealMap) {
                                    partClone.Destroy();
                                }

                                for (const [thing, originalTransparency] of originalTransparencies) {
                                    thing.Transparency = originalTransparency;
                                }

                                return;
                            }
                        }
                    });
                    activeAnimation.AdjustSpeed(1);

                    activeAnimation.Ended.Wait();
                } else {
                    this.Character.PivotTo(targetCFrame);

                    task.wait();

                    let activeLerp = 0;
                    task.spawn(() => {
                        while (true) {
                            const dt = task.wait(1/60);
                            let lerpAlpha = activeLerp + (dt / this._standFadeTime);
                            let ended = false;
                            if (lerpAlpha >= 1) {
                                ended = true;
                                lerpAlpha = 1;
                            }

                            for (const [partClone, realPart] of cloneToRealMap) {
                                partClone.CFrame = partClone.CFrame.Lerp(realPart.CFrame, lerpAlpha);
                            }

                            activeLerp = lerpAlpha;
                            if (ended) {
                                for (const [partClone, realPart] of cloneToRealMap) {
                                    partClone.Destroy();
                                }

                                for (const [thing, originalTransparency] of originalTransparencies) {
                                    thing.Transparency = originalTransparency;
                                }

                                return;
                            }
                        }
                    });

                    task.wait(this._standFadeTime);
                }

                for (const descendant of this.Character.GetDescendants()) {
                    if (descendant.IsA("BasePart")) {
                        descendant.Anchored = false;
                        descendant.AssemblyLinearVelocity = Vector3.zero;
                        descendant.AssemblyAngularVelocity = Vector3.zero;
                        if (descendant.GetAttribute("Falldown_Reverse_CC_To") !== undefined) {
                            descendant.CanCollide = descendant.GetAttribute("Falldown_Reverse_CC_To") as boolean;
                            descendant.SetAttribute("Falldown_Reverse_CC_To", undefined);
                        }
                    }
                }

                this.Humanoid.PlatformStand = false;
                this.HumanoidRootPart.Anchored = false;

                RunService.Heartbeat.Wait();

                task.defer(() => {
                    while (this.Humanoid.MoveDirection.Magnitude <= 0) {
                        RunService.Stepped.Wait();
                    }
                    if (this.HumanoidRootPart.Anchored) {
                        return;
                    }
                    this.HumanoidRootPart.SetNetworkOwner(this.Owner);
                });

                this.Humanoid.EvaluateStateMachine = true;

                this.Humanoid.SetStateEnabled(Enum.HumanoidStateType.Jumping, true);
                this.Humanoid.SetStateEnabled(Enum.HumanoidStateType.GettingUp, true);

                this.Humanoid.ChangeState(Enum.HumanoidStateType.Running);

                this.Ended.Fire();
                this.Ended.Destroy();

                clonedCharacter.Destroy();
            });
        }

        PhysicsService.UnregisterCollisionGroup(this._proxyGroupId);
        PhysicsService.UnregisterCollisionGroup(this._bodypartGroupId);

        this.Destroyed.Fire();
        this.Destroyed.Destroy();
    }
}

/** 
 * Main Falldown class providing static methods for ragdolling characters in Roblox. Creates realistic ragdoll physics by replacing Motor6Ds with constraints, managing collision groups, and providing smooth getup animations.
 * @static
 * @see {@linkcode IActiveRagdoll}
 * @see {@linkcode Falldown.VelocityMode}
 */
export class Falldown {
    /** 
     * Enum used to represent how velocity should be distributed across a ragdolled character's body parts.
     * @static
     * @readonly
     * @enum {number}
     * @see {@linkcode IActiveRagdoll.AddVelocity}
     */
    static VelocityMode = {
        /** Applies velocity only to the HumanoidRootPart. Most efficient for general movement like falling or launching. */
        RootOnly: 0,
        /** Applies the full velocity vector to every body part independently. Creates the strongest force, useful for powerful impacts. */
        AllEqual: 1,
        /** Divides the velocity magnitude evenly across all body parts. Total momentum remains constant regardless of part count. Good for realistic physics. */
        SplitEqual: 2,
        /** Each part gets a random velocity from 0 to the specified magnitude in the same direction. Creates varied motion, useful for explosions. */
        RandomMax: 3
    } as const;

    /** 
     * Enum used to represent how a ragdolled character should exit the ragdoll state.
     * @static
     * @readonly
     * @enum {number}
     * @see {@linkcode IActiveRagdoll.Destroy}
     */
    static ExitMode = {
        /** Character will play the appropriate getup animation and stand up on their own. Default behavior. */
        Smooth: 0,
        /** Character will be restored at its current exact ragdoll position, standing with no fade or animations */
        Immediate: 1
    } as const;

    private static readonly _activeRagdolls: Map<Model, ActiveRagdoll> = new Map<Model, ActiveRagdoll>();

    private static MakeProxies(bodyPartMap: Map<string, BasePart>, proxyGroupId: string, bodypartGroupId: string, owner: Player | undefined): Map<string, BasePart> {
        PhysicsService.RegisterCollisionGroup(proxyGroupId);
        PhysicsService.RegisterCollisionGroup(bodypartGroupId);

        PhysicsService.CollisionGroupSetCollidable(proxyGroupId, bodypartGroupId, false);
        PhysicsService.CollisionGroupSetCollidable(proxyGroupId, "Default", true);
        PhysicsService.CollisionGroupSetCollidable(bodypartGroupId, "Default", false);
        PhysicsService.CollisionGroupSetCollidable(bodypartGroupId, bodypartGroupId, false);

        const proxyMap: Map<string, BasePart> = new Map<string, BasePart>();
        for (const [partName, originalPart] of bodyPartMap) {
            const proxyPart = new Instance("Part");
            proxyPart.Name = partName + "_Colprox";
            proxyPart.Size = originalPart.Size;
            proxyPart.Transparency = 1;
            proxyPart.CastShadow = false;
            proxyPart.CanCollide = true;
            proxyPart.CanQuery = false;
            proxyPart.CanTouch = false;
            proxyPart.Anchored = false;
            proxyPart.Massless = false;
            proxyPart.CFrame = originalPart.CFrame;
            proxyPart.CustomPhysicalProperties = new PhysicalProperties(1, 2, 0, 1, 1);

            if (partName === "HumanoidRootPart") {
                proxyPart.CanCollide = false;
            }

            const weld = new Instance("Weld");
            weld.Name = partName + "_Colprox_Weld";
            weld.Part0 = originalPart;
            weld.Part1 = proxyPart;
            weld.C0 = CFrame.identity;
            weld.Parent = proxyPart;

            proxyPart.Parent = Workspace;

            if (!proxyPart.Anchored) {
                proxyPart.SetNetworkOwner(owner);
            }

            proxyPart.CollisionGroup = proxyGroupId;
            originalPart.CollisionGroup = bodypartGroupId;

            proxyMap.set(partName, proxyPart);
        }

        return proxyMap;
    }

    private static CreateActiveRagdollR6(character: Model, humanoid: Humanoid, standFadeTime: number, automaticDuration: number | undefined, exitMode: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode] | undefined, getupFront: Animation | undefined, getupBack: Animation | undefined): ActiveRagdoll | undefined {
        const leftArm = character.FindFirstChild("Left Arm");
        const rightArm = character.FindFirstChild("Right Arm");
        const leftLeg = character.FindFirstChild("Left Leg");
        const rightLeg = character.FindFirstChild("Right Leg");
        const torso = character.FindFirstChild("Torso");
        const head = character.FindFirstChild("Head");
        const humanoidRootPart = character.FindFirstChild("HumanoidRootPart");

        if ((!leftArm || !leftArm.IsA("BasePart")) ||
            (!rightArm || !rightArm.IsA("BasePart")) ||
            (!leftLeg || !leftLeg.IsA("BasePart")) ||
            (!rightLeg || !rightLeg.IsA("BasePart")) ||
            (!torso || !torso.IsA("BasePart")) ||
            (!head || !head.IsA("BasePart")) ||
            (!humanoidRootPart || !humanoidRootPart.IsA("BasePart"))) {
            return undefined;
        }

        const primaryPos = character.GetPivot().Position;
        const endPos = (leftLeg.CFrame.mul(new CFrame(0, -leftLeg.Size.Y / 2, 0)).Position).Lerp(rightLeg.CFrame.mul(new CFrame(0, -rightLeg.Size.Y / 2, 0)).Position, 0.5);
        const height = math.abs(primaryPos.Y - endPos.Y);

        humanoid.ChangeState(Enum.HumanoidStateType.Physics);
        const animator = humanoid.FindFirstChildOfClass("Animator") || new Instance("Animator", humanoid);
        const getupFrontTrack = getupFront ? animator.LoadAnimation(getupFront) : undefined;
        const getupBackTrack = getupBack ? animator.LoadAnimation(getupBack) : undefined;

        const BodyPartMapping: Map<string, BasePart> = new Map<string, BasePart>();
        BodyPartMapping.set("Left Arm", leftArm);
        BodyPartMapping.set("Right Arm", rightArm);
        BodyPartMapping.set("Left Leg", leftLeg);
        BodyPartMapping.set("Right Leg", rightLeg);
        BodyPartMapping.set("Torso", torso);
        BodyPartMapping.set("Head", head);
        BodyPartMapping.set("HumanoidRootPart", humanoidRootPart);

        const owner = Players.GetPlayerFromCharacter(character);

        const proxyGroupId = HttpService.GenerateGUID(false);
        const bodypartGroupId = HttpService.GenerateGUID(false);

        for (const descendant of character.GetDescendants()) {
            if (descendant.IsA("BasePart")) {
                if (!descendant.Anchored) {
                    descendant.SetNetworkOwner(owner);
                }
                descendant.CollisionGroup = bodypartGroupId;
            }
        }

        const ProxyMapping = this.MakeProxies(BodyPartMapping, proxyGroupId, bodypartGroupId, owner);

        humanoid.SetStateEnabled(Enum.HumanoidStateType.Jumping, false);
        humanoid.SetStateEnabled(Enum.HumanoidStateType.GettingUp, false);
        humanoid.PlatformStand = true;

        humanoid.ChangeState(Enum.HumanoidStateType.PlatformStanding);

        humanoidRootPart.SetAttribute("Falldown_Reverse_CC_To", humanoidRootPart.CanCollide);
        humanoidRootPart.CanCollide = false;

        const jointPairs: Map<string, SocketJointCreationInfo> = new Map();
        jointPairs.set("Left Shoulder", {
            Part0: BodyPartMapping.get(_r6J.LeftShoulder.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r6J.LeftShoulder.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r6J.LeftShoulder
        });
        jointPairs.set("Right Shoulder", {
            Part0: BodyPartMapping.get(_r6J.RightShoulder.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r6J.RightShoulder.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r6J.RightShoulder
        });
        jointPairs.set("Left Hip", {
            Part0: BodyPartMapping.get(_r6J.LeftHip.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r6J.LeftHip.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r6J.LeftHip
        });
        jointPairs.set("Right Hip", {
            Part0: BodyPartMapping.get(_r6J.RightHip.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r6J.RightHip.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r6J.RightHip
        });
        jointPairs.set("Neck", {
            Part0: BodyPartMapping.get(_r6J.Neck.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r6J.Neck.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r6J.Neck
        });

        const weldPairs: Map<string, WeldJointCreationInfo> = new Map();
        weldPairs.set("Root", {
            Part0: BodyPartMapping.get(_r6J.Root.Part0Title) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r6J.Root.Part1Title) ?? humanoidRootPart,
            Info: _r6J.Root
        })

        const destructionInfo: JointDestructionInfo[] = [];

        for (const [constraintName, info] of jointPairs) {
            const part0 = info.Part0;
            const part1 = info.Part1;

            const replacing = part0.FindFirstChild(constraintName) || part1.FindFirstChild(constraintName);
            if (!replacing || !replacing.IsA("Motor6D")) {
                continue;
            }

            const at0 = new Instance("Attachment");
            at0.Name = constraintName + "_Attachment0";
            at0.Parent = part0;
            at0.CFrame = info.Info.Attachment0Info.Offset;

            const at1 = new Instance("Attachment");
            at1.Name = constraintName + "_Attachment1";
            at1.Parent = part1;
            at1.CFrame = info.Info.Attachment1Info.Offset;

            const joint = new Instance("BallSocketConstraint");
            joint.Name = constraintName + "_Constraint";
            joint.Parent = part0;
            joint.Attachment0 = at0;
            joint.Attachment1 = at1;
            joint.Restitution = info.Info.Restitution;
            joint.MaxFrictionTorque = 50;
            joint.LimitsEnabled = info.Info.LimitsEnabled;
            joint.TwistLimitsEnabled = info.Info.TwistLimitsEnabled;
            joint.UpperAngle = info.Info.UpperAngle;
            joint.TwistUpperAngle = info.Info.TwistUpperAngle;
            joint.TwistLowerAngle = info.Info.TwistLowerAngle;

            const proxyNoCol0 = new Instance("NoCollisionConstraint");
            proxyNoCol0.Name = constraintName + "_NoColProxyOnly";
            proxyNoCol0.Parent = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part0 = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part1 = ProxyMapping.get(part1.Name);

            replacing.Enabled = false;

            destructionInfo.push({
                Attachment0: at0,
                Attachment1: at1,
                Constraint: joint,
                NoCol: undefined,
                Replaced: replacing
            });
        }

        for (const [constraintName, info] of weldPairs) {
            const part0 = info.Part0;
            const part1 = info.Part1;
            const replacing = part0.FindFirstChild(constraintName) || part1.FindFirstChild(constraintName);
            if (!replacing || !replacing.IsA("Motor6D")) {
                continue;
            }

            const weld = new Instance("WeldConstraint");
            weld.Name = constraintName + "_Constraint";
            weld.Parent = part0;
            weld.Part0 = part0;
            weld.Part1 = part1;

            const proxyNoCol0 = new Instance("NoCollisionConstraint");
            proxyNoCol0.Name = constraintName + "_NoColProxyOnly";
            proxyNoCol0.Parent = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part0 = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part1 = ProxyMapping.get(part1.Name);

            replacing.Enabled = false;

            destructionInfo.push({
                Attachment0: undefined,
                Attachment1: undefined,
                Constraint: weld,
                NoCol: undefined,
                Replaced: replacing
            });
        }

        for (const descendant of character.GetDescendants()) {
            if (descendant.IsA("BasePart") && !BodyPartMapping.has(descendant.Name)) {
                descendant.SetAttribute("Falldown_Reverse_CC_To", descendant.CanCollide);
                descendant.CanCollide = true;
            }
        }

        humanoid.EvaluateStateMachine = false;

        return new ActiveRagdoll(character, height, standFadeTime, humanoid, humanoidRootPart, leftLeg, rightLeg, destructionInfo, proxyGroupId, bodypartGroupId, ProxyMapping, automaticDuration, exitMode, getupFrontTrack, getupBackTrack);
    }

    private static CreateActiveRagdollR15(character: Model, humanoid: Humanoid, standFadeTime: number, automaticDuration: number | undefined, exitMode: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode] | undefined, getupFront: Animation | undefined, getupBack: Animation | undefined): ActiveRagdoll | undefined {
        const leftUpperArm = character.FindFirstChild("LeftUpperArm");
        const leftLowerArm = character.FindFirstChild("LeftLowerArm");
        const leftHand = character.FindFirstChild("LeftHand");
        const rightUpperArm = character.FindFirstChild("RightUpperArm");
        const rightLowerArm = character.FindFirstChild("RightLowerArm");
        const rightHand = character.FindFirstChild("RightHand");
        const leftUpperLeg = character.FindFirstChild("LeftUpperLeg");
        const leftLowerLeg = character.FindFirstChild("LeftLowerLeg");
        const leftFoot = character.FindFirstChild("LeftFoot");
        const rightUpperLeg = character.FindFirstChild("RightUpperLeg");
        const rightLowerLeg = character.FindFirstChild("RightLowerLeg");
        const rightFoot = character.FindFirstChild("RightFoot");
        const lowerTorso = character.FindFirstChild("LowerTorso");
        const upperTorso = character.FindFirstChild("UpperTorso");
        const head = character.FindFirstChild("Head");
        const humanoidRootPart = character.FindFirstChild("HumanoidRootPart");

        if ((!leftUpperArm || !leftUpperArm.IsA("BasePart")) ||
            (!leftLowerArm || !leftLowerArm.IsA("BasePart")) ||
            (!leftHand || !leftHand.IsA("BasePart")) ||
            (!rightUpperArm || !rightUpperArm.IsA("BasePart")) ||
            (!rightLowerArm || !rightLowerArm.IsA("BasePart")) ||
            (!rightHand || !rightHand.IsA("BasePart")) ||
            (!leftUpperLeg || !leftUpperLeg.IsA("BasePart")) ||
            (!leftLowerLeg || !leftLowerLeg.IsA("BasePart")) ||
            (!leftFoot || !leftFoot.IsA("BasePart")) ||
            (!rightUpperLeg || !rightUpperLeg.IsA("BasePart")) ||
            (!rightLowerLeg || !rightLowerLeg.IsA("BasePart")) ||
            (!rightFoot || !rightFoot.IsA("BasePart")) ||
            (!lowerTorso || !lowerTorso.IsA("BasePart")) ||
            (!upperTorso || !upperTorso.IsA("BasePart")) ||
            (!head || !head.IsA("BasePart")) ||
            (!humanoidRootPart || !humanoidRootPart.IsA("BasePart"))) {
            return undefined;
        }

        const primaryPos = character.GetPivot().Position;
        const endPos = (leftFoot.CFrame.mul(new CFrame(0, -leftFoot.Size.Y / 2, 0)).Position).Lerp(rightFoot.CFrame.mul(new CFrame(0, -rightFoot.Size.Y / 2, 0)).Position, 0.5);
        const height = math.abs(primaryPos.Y - endPos.Y);

        humanoid.ChangeState(Enum.HumanoidStateType.Physics)
        const animator = humanoid.FindFirstChildOfClass("Animator") || new Instance("Animator", humanoid);
        const getupFrontTrack = getupFront ? animator.LoadAnimation(getupFront) : undefined;
        const getupBackTrack = getupBack ? animator.LoadAnimation(getupBack) : undefined;

        const BodyPartMapping: Map<string, BasePart> = new Map<string, BasePart>();
        BodyPartMapping.set("LeftUpperArm", leftUpperArm);
        BodyPartMapping.set("LeftLowerArm", leftLowerArm);
        BodyPartMapping.set("LeftHand", leftHand);
        BodyPartMapping.set("RightUpperArm", rightUpperArm);
        BodyPartMapping.set("RightLowerArm", rightLowerArm);
        BodyPartMapping.set("RightHand", rightHand);
        BodyPartMapping.set("LeftUpperLeg", leftUpperLeg);
        BodyPartMapping.set("LeftLowerLeg", leftLowerLeg);
        BodyPartMapping.set("LeftFoot", leftFoot);
        BodyPartMapping.set("RightUpperLeg", rightUpperLeg);
        BodyPartMapping.set("RightLowerLeg", rightLowerLeg);
        BodyPartMapping.set("RightFoot", rightFoot);
        BodyPartMapping.set("LowerTorso", lowerTorso);
        BodyPartMapping.set("UpperTorso", upperTorso);
        BodyPartMapping.set("Head", head);
        BodyPartMapping.set("HumanoidRootPart", humanoidRootPart);

        const owner = Players.GetPlayerFromCharacter(character);

        const proxyGroupId = HttpService.GenerateGUID(false);
        const bodypartGroupId = HttpService.GenerateGUID(false);

        for (const descendant of character.GetDescendants()) {
            if (descendant.IsA("BasePart")) {
                if (!descendant.Anchored) {
                    descendant.SetNetworkOwner(owner);
                }
                descendant.CollisionGroup = bodypartGroupId;
            }
        }

        const ProxyMapping = this.MakeProxies(BodyPartMapping, proxyGroupId, bodypartGroupId, owner);

        humanoid.SetStateEnabled(Enum.HumanoidStateType.Jumping, false);
        humanoid.SetStateEnabled(Enum.HumanoidStateType.GettingUp, false);
        humanoid.PlatformStand = true;

        humanoid.ChangeState(Enum.HumanoidStateType.PlatformStanding);

        humanoidRootPart.SetAttribute("Falldown_Reverse_CC_To", humanoidRootPart.CanCollide);
        humanoidRootPart.CanCollide = false;

        const socketJointPairs: Map<string, SocketJointCreationInfo> = new Map();
        const hingeJointPairs: Map<string, HingeJointCreationInfo> = new Map();
        const weldPairs: Map<string, WeldJointCreationInfo> = new Map();
        socketJointPairs.set("LeftShoulder", {
            Part0: BodyPartMapping.get(_r15J.LeftShoulder.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.LeftShoulder.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.LeftShoulder
        });
        socketJointPairs.set("LeftWrist", {
            Part0: BodyPartMapping.get(_r15J.LeftWrist.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.LeftWrist.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.LeftWrist
        });
        socketJointPairs.set("RightShoulder", {
            Part0: BodyPartMapping.get(_r15J.RightShoulder.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.RightShoulder.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.RightShoulder
        });
        socketJointPairs.set("RightWrist", {
            Part0: BodyPartMapping.get(_r15J.RightWrist.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.RightWrist.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.RightWrist
        });
        socketJointPairs.set("LeftHip", {
            Part0: BodyPartMapping.get(_r15J.LeftHip.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.LeftHip.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.LeftHip
        });
        socketJointPairs.set("LeftAnkle", {
            Part0: BodyPartMapping.get(_r15J.LeftAnkle.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.LeftAnkle.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.LeftAnkle
        });
        socketJointPairs.set("RightHip", {
            Part0: BodyPartMapping.get(_r15J.RightHip.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.RightHip.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.RightHip
        });
        socketJointPairs.set("RightAnkle", {
            Part0: BodyPartMapping.get(_r15J.RightAnkle.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.RightAnkle.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.RightAnkle
        });
        socketJointPairs.set("Neck", {
            Part0: BodyPartMapping.get(_r15J.Neck.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.Neck.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.Neck
        });
        hingeJointPairs.set("LeftElbow", {
            Part0: BodyPartMapping.get(_r15J.LeftElbow.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.LeftElbow.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.LeftElbow
        });
        hingeJointPairs.set("RightElbow", {
            Part0: BodyPartMapping.get(_r15J.RightElbow.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.RightElbow.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.RightElbow
        });
        hingeJointPairs.set("LeftKnee", {
            Part0: BodyPartMapping.get(_r15J.LeftKnee.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.LeftKnee.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.LeftKnee
        });
        hingeJointPairs.set("RightKnee", {
            Part0: BodyPartMapping.get(_r15J.RightKnee.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.RightKnee.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.RightKnee
        });
        hingeJointPairs.set("Waist", {
            Part0: BodyPartMapping.get(_r15J.Waist.Attachment0Info.TakeoverTitle) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.Waist.Attachment1Info.TakeoverTitle) ?? humanoidRootPart,
            Info: _r15J.Waist
        });
        weldPairs.set("Root", {
            Part0: BodyPartMapping.get(_r15J.Root.Part0Title) ?? humanoidRootPart,
            Part1: BodyPartMapping.get(_r15J.Root.Part1Title) ?? humanoidRootPart,
            Info: _r15J.Root
        })

        const destructionInfo: JointDestructionInfo[] = [];

        for (const [constraintName, info] of socketJointPairs) {
            const part0 = info.Part0;
            const part1 = info.Part1;

            const replacing = part0.FindFirstChild(constraintName) || part1.FindFirstChild(constraintName);
            if (!replacing || !replacing.IsA("Motor6D")) {
                continue;
            }

            const at0 = new Instance("Attachment");
            at0.Name = constraintName + "_Attachment0";
            at0.Parent = part0;
            at0.CFrame = info.Info.Attachment0Info.Offset;

            const at1 = new Instance("Attachment");
            at1.Name = constraintName + "_Attachment1";
            at1.Parent = part1;
            at1.CFrame = info.Info.Attachment1Info.Offset;

            const joint = new Instance("BallSocketConstraint");
            joint.Name = constraintName + "_Constraint";
            joint.Parent = part0;
            joint.Attachment0 = at0;
            joint.Attachment1 = at1;
            joint.Restitution = info.Info.Restitution;
            joint.MaxFrictionTorque = 50;
            joint.LimitsEnabled = info.Info.LimitsEnabled;
            joint.TwistLimitsEnabled = info.Info.TwistLimitsEnabled;
            joint.UpperAngle = info.Info.UpperAngle;
            joint.TwistUpperAngle = info.Info.TwistUpperAngle;
            joint.TwistLowerAngle = info.Info.TwistLowerAngle;

            const proxyNoCol0 = new Instance("NoCollisionConstraint");
            proxyNoCol0.Name = constraintName + "_NoColProxyOnly";
            proxyNoCol0.Parent = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part0 = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part1 = ProxyMapping.get(part1.Name);

            replacing.Enabled = false;

            destructionInfo.push({
                Attachment0: at0,
                Attachment1: at1,
                Constraint: joint,
                NoCol: undefined,
                Replaced: replacing
            });
        }

        for (const [constraintName, info] of hingeJointPairs) {
            const part0 = info.Part0;
            const part1 = info.Part1;

            const replacing = part0.FindFirstChild(constraintName) || part1.FindFirstChild(constraintName);
            if (!replacing || !replacing.IsA("Motor6D")) {
                continue;
            }

            const at0 = new Instance("Attachment");
            at0.Name = constraintName + "_Attachment0";
            at0.Parent = part0;
            at0.CFrame = info.Info.Attachment0Info.Offset;

            const at1 = new Instance("Attachment");
            at1.Name = constraintName + "_Attachment1";
            at1.Parent = part1;
            at1.CFrame = info.Info.Attachment1Info.Offset;

            const joint = new Instance("HingeConstraint");
            joint.Name = constraintName + "_Constraint";
            joint.Parent = part0;
            joint.Attachment0 = at0;
            joint.Attachment1 = at1;
            joint.Restitution = info.Info.Restitution;
            joint.LimitsEnabled = info.Info.LimitsEnabled;
            joint.UpperAngle = info.Info.UpperAngle;
            joint.LowerAngle = info.Info.LowerAngle;

            const proxyNoCol0 = new Instance("NoCollisionConstraint");
            proxyNoCol0.Name = constraintName + "_NoColProxyOnly";
            proxyNoCol0.Parent = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part0 = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part1 = ProxyMapping.get(part1.Name);

            replacing.Enabled = false;

            destructionInfo.push({
                Attachment0: at0,
                Attachment1: at1,
                Constraint: joint,
                NoCol: undefined,
                Replaced: replacing
            });
        }

        for (const [constraintName, info] of weldPairs) {
            const part0 = info.Part0;
            const part1 = info.Part1;
            const replacing = part0.FindFirstChild(constraintName) || part1.FindFirstChild(constraintName);
            if (!replacing || !replacing.IsA("Motor6D")) {
                continue;
            }

            const weld = new Instance("WeldConstraint");
            weld.Name = constraintName + "_Constraint";
            weld.Parent = part0;
            weld.Part0 = part0;
            weld.Part1 = part1;

            const proxyNoCol0 = new Instance("NoCollisionConstraint");
            proxyNoCol0.Name = constraintName + "_NoColProxyOnly";
            proxyNoCol0.Parent = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part0 = ProxyMapping.get(part0.Name);
            proxyNoCol0.Part1 = ProxyMapping.get(part1.Name);

            replacing.Enabled = false;

            destructionInfo.push({
                Attachment0: undefined,
                Attachment1: undefined,
                Constraint: weld,
                NoCol: undefined,
                Replaced: replacing
            });
        }
        for (const descendant of character.GetDescendants()) {
            if (descendant.IsA("BasePart") && !BodyPartMapping.has(descendant.Name)) {
                descendant.SetAttribute("Falldown_Reverse_CC_To", descendant.CanCollide);
                descendant.CanCollide = true;
            }
        }

        humanoid.EvaluateStateMachine = false;

        return new ActiveRagdoll(character, height, standFadeTime, humanoid, humanoidRootPart, leftFoot, rightFoot, destructionInfo, proxyGroupId, bodypartGroupId, ProxyMapping, automaticDuration, exitMode, getupFrontTrack, getupBackTrack);
    }

    /** 
     * Converts a character into a ragdoll with physics-based movement. Detects R6/R15 rig automatically, replaces Motor6Ds with constraints, creates collision proxies, and sets up automatic recovery.
     * @static
     * @param character - The character `Model` to ragdoll. Must have a Humanoid.
     * @param standupFadeTime - Duration (in seconds) for the fade clone to remain visible after standing up. Recommended: 0.3-0.7 seconds.
     * @param automaticDuration - Optional. If provided, the ragdoll will automatically end after this many seconds. If omitted, you must manually call {@linkcode IActiveRagdoll.Destroy} to end the ragdoll.
     * @param getupFront - Optional. Animation to play when getting up while facing forward (belly down). If not provided, character snaps to standing.
     * @param getupBack - Optional. Animation to play when getting up while facing backward (back down). If not provided, character snaps to standing.
     * @returns An {@linkcode IActiveRagdoll} interface if successful, or `undefined` if character is already ragdolled, has no Humanoid, or is missing required body parts.
     * @see {@linkcode IActiveRagdoll}
     * @see {@linkcode Falldown.UnragdollCharacter}
     * @see {@linkcode Falldown.VelocityMode}
     */
    public static RagdollCharacter(character: Model, standupFadeTime: number, automaticDuration?: number, exitMode?: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode], getupFront?: Animation, getupBack?: Animation): IActiveRagdoll | undefined {
        if (this._activeRagdolls.has(character)) {
		    return undefined;
	    }

        const humanoid = character.FindFirstChildOfClass("Humanoid");
        if (!humanoid) {
            return undefined;
        }

        if (humanoid.RigType === Enum.HumanoidRigType.R6) {
            const createdActiveRagdoll = this.CreateActiveRagdollR6(character, humanoid, standupFadeTime, automaticDuration, exitMode, getupFront, getupBack);
            if (createdActiveRagdoll) {
                this._activeRagdolls.set(character, createdActiveRagdoll);
                createdActiveRagdoll.Destroyed.Once(() => {
                    if (this._activeRagdolls.has(character)) {
                        this._activeRagdolls.delete(character);
                    }
                });
                return createdActiveRagdoll;
            } else {
                return undefined;
            }
        } else {
            const createdActiveRagdoll = this.CreateActiveRagdollR15(character, humanoid, standupFadeTime, automaticDuration, exitMode, getupFront, getupBack);
            if (createdActiveRagdoll) {
                this._activeRagdolls.set(character, createdActiveRagdoll);
                createdActiveRagdoll.Destroyed.Once(() => {
                    if (this._activeRagdolls.has(character)) {
                        this._activeRagdolls.delete(character);
                    }
                });
                return createdActiveRagdoll;
            } else {
                return undefined;
            }
        }
    }

    /** 
     * Manually ends the ragdoll state for a specific character. Equivalent to calling {@linkcode IActiveRagdoll.Destroy} on the ragdoll instance. If the character is not currently ragdolled, this method does nothing.
     * @static
     * @param character - The character `Model` to un-ragdoll
     * @param delayTime - Optional. If provided, delays the un-ragdoll by this many seconds. If omitted, un-ragdolls immediately.
     * @see {@linkcode IActiveRagdoll.Destroy}
     * @see {@linkcode Falldown.RagdollCharacter}
     * @see {@linkcode Falldown.UnragdollAllCharacters}
     */
    public static UnragdollCharacter(character: Model, delayTime?: number, exitMode?: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode]) {
        const activeRagdoll = this._activeRagdolls.get(character);

        if (activeRagdoll) {
            if (delayTime) {
                delay(delayTime, () => {
                    if (this._activeRagdolls.has(character)) {
                        this._activeRagdolls.delete(character);
                        activeRagdoll.Destroy(exitMode || Falldown.ExitMode.Smooth);
                    }
                });
            } else {
                if (this._activeRagdolls.has(character)) {
                    this._activeRagdolls.delete(character);
                    activeRagdoll.Destroy(exitMode || Falldown.ExitMode.Smooth);
                }
            }
	    }
    }

    /**
     * @static
     * @param character - The character `Model` to check
     * @returns Whether the character is currently ragdolled
     */
    public static IsCharacterRagdolled(character: Model): boolean {
        return this._activeRagdolls.has(character);
    }

    /** 
     * Ends the ragdoll state for ALL currently ragdolled characters. Useful for game-wide effects like round resets or emergency cleanup. Each character performs their getup animation independently.
     * @static
     * @param delayTime - Optional. If provided, delays the un-ragdoll by this many seconds for all characters. If omitted, un-ragdolls all immediately.
     * @see {@linkcode Falldown.UnragdollCharacter}
     * @see {@linkcode Falldown.RagdollCharacter}
     */
    public static UnragdollAllCharacters(delayTime?: number, exitMode?: (typeof Falldown.ExitMode)[keyof typeof Falldown.ExitMode]) {
        if (delayTime) {
            delay(delayTime, () => {
                for (const [character, activeRagdoll] of this._activeRagdolls) {
                    if (this._activeRagdolls.has(character)) {
                        this._activeRagdolls.delete(character);
                        activeRagdoll.Destroy(exitMode || Falldown.ExitMode.Smooth);
                    }
                }
            });
        } else {
            for (const [character, activeRagdoll] of this._activeRagdolls) {
                if (this._activeRagdolls.has(character)) {
                    this._activeRagdolls.delete(character);
                    activeRagdoll.Destroy(exitMode || Falldown.ExitMode.Smooth);
                }
            }
        }
    }
}