import { Sidebar } from '@/components/Sidebar/Sidebar';
import type { FC } from 'react';
import { Outlet } from 'react-router';

const SettingsLayout: FC = () => {
    return (
        <>
            <Sidebar>
                SettingsLayout
            </Sidebar>
            <Outlet />
        </>
    );
};

export default SettingsLayout;
