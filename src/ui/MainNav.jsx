import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

function MainNav() {
  return (
    <nav className="bg-white p-4 w-full">
      <ul className="space-y-2 list-none">
        <li>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all "
          >
            <HomeIcon />
            <span className="text-base font-medium">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
          >
            <CalendarTodayIcon />
            <span className="text-base font-medium">Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
          >
            <HomeWorkIcon />
            <span className="text-base font-medium">Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
          >
            <PersonIcon />
            <span className="text-base font-medium">Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
          >
            <SettingsIcon />
            <span className="text-base font-medium">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
