import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { loginApi } from '@/apis/authApis/authApis';
import localStorageApis from '@/apis/localStorageApis/localStorageApis';
import routePathFactory from '@/routes/routePathFactory';
import useAuthStore from '@/stores/authStore/authStore';

const useLoginMutation = () => {
  const setAuthInfo = useAuthStore(origin => origin.actions.setAuthInfo);

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onError: () => {
      toast.error('email 또는 password 가 일치하지 않습니다.\n(일치 시에도 20% 확률로 실패합니다.)');
    },
    onSuccess: ({ data }) => {
      localStorageApis.token.set(data);
      setAuthInfo(data);

      toast.success('환영합니다.');

      navigate(routePathFactory.todoListPage(), {
        replace: true,
      });
    },
  });

  return loginMutation;
};

export default useLoginMutation;
