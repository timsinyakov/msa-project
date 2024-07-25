import {
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
}: SingleRunProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return (
    <>
      <Flex className={styles.back} justify="space-between" align="center">
        <div style={{ marginLeft: '50px' }}>
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
                <Button radius={10} color="teal">
                  See Note
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>{note}</HoverCard.Dropdown>
            </HoverCard>
          )}
        </div>
        <Flex direction="column" gap="sm" style={{ marginRight: '50px' }}>
          <Group align="center" justify="space-between">
            <Text fw={500} size="20px">
              Enjoyment:
            </Text>
            <Rating value={enjoyment} size="lg" readOnly />
          </Group>
          <Group align="center" justify="space-between">
            <Text fw={500} size="20px">
              Difficulty:
            </Text>
            <Rating value={difficulty} size="lg" readOnly />
          </Group>
          <Group align="center" justify="space-between">
            <Text fw={500} size="20px">
              Pain:
            </Text>
            <Rating value={pain} size="lg" readOnly />
          </Group>
          <Group align="center" justify="space-between">
            <Text fw={500} size="20px">
              Effort:
            </Text>
            <Rating value={effort} size="lg" readOnly />
          </Group>
        </Flex>
      </Flex>
    </>
  );
};
