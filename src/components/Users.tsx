import { getUserById, getUsers } from '@/Services/UserService';
import { Button } from '@mantine/core';

export function Users() {
  const handleClick = async () => {
    const a = await getUsers();
    console.log(a);
  };

  const handeById = async () => {
    const a = await getUserById(2);
    console.log(a);
  };

  return (
    <>
      <Button onClick={handleClick}>helo</Button>

      <Button onClick={handeById}>get by id</Button>
    </>
  );
}
