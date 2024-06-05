import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, isTokenValid, logout } from '@/utils/auth';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const [loading, setLoading] = useState(true);
        const router = useRouter();

        useEffect(() => {
            const checkAuth = async () => {
                const token = getToken();
                if (!token || !isTokenValid(token)) {
                    logout();
                    router.push('/login');
                } else {
                    setLoading(false);
                }
            };

            checkAuth();
        }, []);

        if (loading) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
