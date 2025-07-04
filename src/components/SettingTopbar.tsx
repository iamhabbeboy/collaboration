import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faEnvelope         
} from '@fortawesome/free-solid-svg-icons';
export default function SettingTopbar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <input
        type="text"
        placeholder="Search"
        className="p-2 w-3/4 border-gray-300 border rounded"
      />
      <div className="flex items-center gap-4">
        <span className="w-4 h-4 bg-white rounded-full" > <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" /></span>
        <span className="w-4 h-4 bg-white rounded-full" > <FontAwesomeIcon icon={faBell} className="mr-2 text-gray-600" /></span>
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-semibold">Leslie Alexander</span>
        </div>
      </div>
    </header>
  );
}
