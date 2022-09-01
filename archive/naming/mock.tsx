export const useQuery = () => {
  const loading: boolean = true;
  const data: string[] = [];
  const errors: string[] = [];
  return {
    loading,
    data,
    errors,
  };
};

export const MockComponent = {
  W: () => <></>,
  X: () => <></>,
  Y: () => <></>,
  Z: () => <></>,
};
