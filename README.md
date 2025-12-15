# @rbxts/falldown

[![Documentation](https://img.shields.io/badge/docs-online-blue)](https://irishfix.github.io/rbxts-falldown/)

Roblox-ts library for realistic ragdoll physics with smooth getup animations and collision management. Automatically detects R6/R15 rigs, replaces Motor6Ds with ball-socket constraints, and provides surface-aware positioning when characters recover from ragdoll state.

## Features
- Automatic R6/R15 rig detection and constraint setup
- Customizable getup animations (front/back orientations)
- Multiple velocity distribution modes (`RootOnly`, `AllEqual`, `SplitEqual`, `RandomMax`)
- Surface-aware positioning with slope alignment when standing up
- Collision proxy system to prevent self-collision during ragdoll
- Lifecycle signals: `Destroyed` and `Ended` for ragdoll state management
- Optional automatic duration with smooth fade transitions
- Manual control via `Destroy()` or static `UnragdollCharacter()` methods

## Documentation
Full API documentation: **[https://irishfix.github.io/rbxts-falldown/](https://irishfix.github.io/rbxts-falldown/)**

## Installation
```sh
npm install @rbxts/falldown
```

## Quick start
```ts
import { Falldown } from "@rbxts/falldown";

// Basic ragdoll with automatic recovery after 5 seconds and 0.5s fade transition
const ragdoll = Falldown.RagdollCharacter(character, 0.5, 5);

// Apply velocity when ragdolling starts
if (ragdoll) {
    ragdoll.AddVelocity(new Vector3(20, 40, 10), Falldown.VelocityMode.SplitEqual);
    
    // Listen for when ragdoll ends
    ragdoll.Ended.Once(() => {
        print(`${character.Name} recovered!`);
    });
}

// Manual ragdoll control (no automatic duration)
const manualRagdoll = Falldown.RagdollCharacter(character, 0.5);
task.wait(3);
manualRagdoll?.Destroy(); // End ragdoll manually

// Ragdoll with custom getup animations
const getupFront = new Instance("Animation");
getupFront.AnimationId = "rbxassetid://your_front_animation";

const getupBack = new Instance("Animation");
getupBack.AnimationId = "rbxassetid://your_back_animation";

const ragdollWithAnims = Falldown.RagdollCharacter(character, 0.5, 5, getupFront, getupBack);
```

## API hints
- **Ragdolling**: `Falldown.RagdollCharacter(character, standupFadeTime, automaticDuration?, getupFront?, getupBack?)` returns `IActiveRagdoll | undefined`.
- **Velocity modes**: 
  - `RootOnly`: Apply to HumanoidRootPart only (most efficient)
  - `AllEqual`: Apply full velocity to every body part
  - `SplitEqual`: Distribute velocity evenly across all parts (realistic)
  - `RandomMax`: Random velocity per part (chaotic effects)
- **Manual control**: `ragdoll.Destroy()` or `Falldown.UnragdollCharacter(character, delayTime?)` to end ragdoll state.
- **Bulk operations**: `Falldown.UnragdollAllCharacters(delayTime?)` to recover all ragdolled characters.
- **Velocity application**: `AddVelocity(velocity, mode)` for directional force, `AddRandomVelocity(maxVelocity)` for chaotic motion.
- **Lifecycle events**: `ragdoll.Ended` fires when getup animation completes, `ragdoll.Destroyed` fires after cleanup.
- **Properties**: Access `Character`, `Humanoid`, `HumanoidRootPart`, `Owner` (Player | undefined), and animation tracks via the returned interface.

## License
MIT
