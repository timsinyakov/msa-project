import {
  Badge,
  Button,
  Drawer,
  Flex,
  Group,
  HoverCard,
  Menu,
  Rating,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import styles from './JournalSingle.module.css';
import { useDisclosure } from '@mantine/hooks';
import { StatsCard } from './StatsCard';
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa';
import { useRuns } from '../Hooks/useRuns';

interface SingleRunProps {
  time: number;
  distance: number;
  speed: string;
  enjoyment: number;
  difficulty: number;
  pain: number;
  effort: number;
  note: string;
  goal: number;
  date: Date;
  id: number;
  onDelete: () => void;
}

export const SingleRun = ({
  goal,
  time,
  distance,
  speed,
  enjoyment,
  difficulty,
  pain,
  effort,
  note,
  date,
  id,
  onDelete,
}: SingleRunProps) => {
  const { delRun } = useRuns();

  const handleDelete = () => {
    delRun(id).then(() => {
      if (onDelete) {
        onDelete();
      }
    });
  };

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <Flex
      className={styles.back}
      justify="space-between"
      align="center"
      style={{ position: 'relative' }}
      bg="primary"
    >
      <Button
        variant="light"
        onClick={handleDelete}
        style={{
          position: 'absolute',
          top: '0px',
          margin: '8px',
          padding: '0',
          width: 'auto',
          height: 'auto',
        }}
      >
        <FaRegTrashAlt size={20} />
      </Button>
      <div style={{ marginLeft: '10%' }}>
        <Text size="xs" style={{ marginLeft: '5px' }}>
          {formattedDate}
        </Text>
        <Text fw={750} size="40px">
          {distance} km
        </Text>
        <Space h="xs" />
        <Text size="xs" style={{ marginLeft: '5px' }}>
          {time} min
        </Text>
        <Space h="xs" />
        <Text size="xs" style={{ marginLeft: '5px' }}>
          {speed}
        </Text>
        <Space h="xs" />
        {note && (
          <HoverCard shadow="md">
            <HoverCard.Target>
              <Button color="teal" size="compact-xs">
                See Note
              </Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>{note}</HoverCard.Dropdown>
          </HoverCard>
        )}
      </div>
      <Flex direction="column" gap="sm" style={{ marginRight: '3%' }}>
        <Group align="center" justify="space-between">
          <Text fw={500}>Enjoyment:</Text>
          <Rating value={enjoyment} readOnly />
        </Group>
        <Group align="center" justify="space-between">
          <Text fw={100}>Difficulty:</Text>
          <Rating value={difficulty} readOnly />
        </Group>
        <Group align="center" justify="space-between">
          <Text fw={500}>Pain:</Text>
          <Rating value={pain} readOnly />
        </Group>
        <Group align="center" justify="space-between">
          <Text fw={500}>Effort:</Text>
          <Rating value={effort} readOnly />
        </Group>
      </Flex>
    </Flex>
  );
};
