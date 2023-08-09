import EventsBoard from "./Components/EventsBoard";
import PageTitle from "./Components/PageTitle";
import GlobalStyles from "./GlobalStyles";

import events from './data.json';

export default function App() {
  return (
    <>
    <GlobalStyles />
      <PageTitle title='24th Core Worlds Coalition Conference' />
      <EventsBoard events={events} />
    </>
  );
}