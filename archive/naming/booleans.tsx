import { MockComponent, useQuery } from "./mock";

// Simplifique a lógica
function checkIsBiggerThan50(value: number) {
  const isNotBiggerThan50 = value <= 50;

  if (!isNotBiggerThan50) {
    return true;
  }

  return false;
}

const Component1 = () => {
  const { loading, data, errors } = useQuery();

  return (
    <>
      {loading ? (
        <MockComponent.W />
      ) : !loading && data.length > 0 && !errors.length ? (
        <MockComponent.X />
      ) : data.length <= 0 && !errors.length ? (
        <MockComponent.Y />
      ) : (
        <MockComponent.Z />
      )}
    </>
  );
};

const Component2 = () => {
  const { loading, data, errors } = useQuery();

  if (loading) return <MockComponent.W />;
  if (errors.length) return <MockComponent.Z />;
  if (!data.length) return <MockComponent.Y />;

  return <MockComponent.X />;
};
