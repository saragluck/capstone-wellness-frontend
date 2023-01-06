import { SleepIndex } from "./SleepIndex";

export function SleepGraph(props) {
  const duration = props.sleeps.map((sleep) => (moment
    .duration(moment(sleep.awake, "YYYY/MM/DD hh:mm").diff(moment(sleep.asleep, "YYYY/MM/DD hh:mm")))
    .asHours()
  )
}
