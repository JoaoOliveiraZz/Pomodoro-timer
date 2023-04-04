import { FormContainer, TaskInput, MinutesAmountInput } from "./styles";

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor='Task'>Vou trabalhar em</label>
      <TaskInput
        list='task-suggestions'
        placeholder='Dê um nome à sua tarefa'
        type='text'
        id='Task'
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id='task-suggestions'>
        <option value='projeto 1' />
        <option value='projeto 2' />
        <option value='projeto 3' />
      </datalist>

      <label htmlFor='minutesAmount'>Durante</label>

      <MinutesAmountInput
        type='number'
        id='minutesAmount'
        placeholder='00'
        step={5}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
