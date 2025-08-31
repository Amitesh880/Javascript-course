import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { notifications, totalNotificationSelector } from './atoms';
import { useEffect } from 'react';
import axios from 'axios';
import { todos } from './todos';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    async function fetchData() {
      // Simulate API call
      const res = { data: todos };
      setNetworkCount(res.data);
    }
    fetchData();
  }, [setNetworkCount]);

  return (
    <>
      <button>Home</button>
      <button>
        My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;