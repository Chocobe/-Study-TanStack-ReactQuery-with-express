import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { loginApi } from '@/apis/authApis/authApis';
import routePathFactory from '@/routes/routePathFactory';
import useAuthStore from '@/stores/authStore/authStore';

const useLoginMutation = () => {
  const setAuthInfo = useAuthStore(origin => origin.actions.setAuthInfo);

  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: ({ data }) => {
      setAuthInfo(data);
      navigate(routePathFactory.todoListPage());
    },
  });

  return loginMutation;
};

export default useLoginMutation;
