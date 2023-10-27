import {
  Animator,
  Behaviour,
  serializable,
} from "@needle-tools/engine";


export class RaceStarter extends Behaviour {

  @serializable(Animator)
  public horseAnimators?: Animator[];

  @serializable(Animator)
  public pathAnimator?: Animator;

  start() {
    console.log("RaceStarter start");

    //start all horses

    this.startRaceWithDelay();
  }

  private startRaceWithDelay() {
    setTimeout(() => {
      if (this.pathAnimator) {
        this.startRace();
      }
    }, 4000);

  }

  private startRace() {
    if (this.pathAnimator) {
      this.pathAnimator.enabled = true;

      if (this.horseAnimators) {
        for (let i = 0; i < this.horseAnimators.length; i++) {
          this.horseAnimators[i].setTrigger("StartRace");
        }
      }
    }
  }
}
