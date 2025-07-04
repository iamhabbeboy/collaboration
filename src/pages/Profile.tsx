import Sidebar from '../components/Sidebar';
import SettingTopbar from '../components/SettingTopbar';
import Settings from '../components/Settings';

export default function App() {
  return (


    <div className="flex pt-2 min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <SettingTopbar />
        <div className="p-4">
          <Settings />
        </div>
      </div>
    </div>
  );
}
