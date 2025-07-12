import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SubMenu from '../components/SubMenu';
import ProfileForm from '../components/ProfileForm';
export default function Settings() {
    return (_jsxs("div", { className: "flex gap-6", children: [_jsx(SubMenu, {}), _jsx(ProfileForm, { title: '', price: '', image: '' })] }));
}
