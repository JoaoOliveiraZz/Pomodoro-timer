// Libs
import { HandPalm, Play } from "phosphor-react";

// Styles
import {
  HomeContainer,
  StartContdownButton,
  StopContdownButton,
} from "./style";
import { createContext, useEffect, useState } from "react";

// Components
import { NewCycleForm } from "./components/newCycleForm";
import { Countdown } from "./components/Countdown";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptDate?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
}
export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function handleCreateNewCycle(data: newCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((prev) => [...prev, newCycle]);
    setActiveCycleId(id);
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  // const task = watch("task");
  // const isDisabledSubmit = !task;

  return (
    <HomeContainer>
      <form /* onSubmit={handleSubmit(handleCreateNewCycle)} */>
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          {/* <NewCycleForm /> */}
          <Countdown />
        </CyclesContext.Provider>
        {/* {activeCycle ? (
        <StopContdownButton onClick={handleInterruptCycle} type='button'>
          <HandPalm />
          Interromper
        </StopContdownButton>
      ) : (
        <StartContdownButton disabled={isDisabledSubmit} type='submit'>
          <Play />
          Começar
        </StartContdownButton>
      )} */}
      </form>
    </HomeContainer>
  );
}
