import {
  Card,
  Image,
  Text,
  Group,
  RingProgress,
  Stack,
  Rating,
  Center,
  Button,
  Paper,
  HoverCard,
  Tooltip,
  useMantineColorScheme,
  useComputedColorScheme,
  Space,
  Flex,
} from '@mantine/core';
import classes from './NewSingleRun.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useRuns } from '@/Hooks/useRuns';
import { FaBookOpen } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CiCircleInfo } from 'react-icons/ci';

interface NewSingleRunProps {
  time: number;
  distance: number;
  speed: string;
  enjoyment: number;
  difficulty: number;
  pain: number;
  effort: number;
  note: string;
  goal: number;
  date: Date | null;
  id: number;
  onDelete: () => void;
}

export const NewSingleRun = ({
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
}: NewSingleRunProps) => {

  const { delRun } = useRuns();

  const handleDelete = () => {
    delRun(id).then(() => {
      if (onDelete) {
        onDelete();
      }
    });
  };

  const navigate = useNavigate();

  const editRun = (runId: number) => {
    navigate(`/edit/${runId}`);
  };

  console.log(enjoyment);
  const avgSpeed = (distance / time).toFixed(2);
  const avgSpeedValue = isNaN(Number(avgSpeed)) ? '0 km/hr' : avgSpeed + ' km/hr';

  const formattedDate = new Date(date || '').toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const stats = [
    { title: 'Distance', value: distance.toString() + ' km' },
    { title: 'Avg. speed', value: avgSpeedValue },
    { title: 'Time', value: time.toString() + ' min' },
  ];

  const feedback = [
    { title: 'Enjoyment', value: enjoyment },
    { title: 'Difficulty', value: difficulty },
    { title: 'Effort', value: effort },

    { title: 'Pain', value: pain },
  ];

  const items = stats.map((stat) => (
    <Group>
      <div key={stat.title}>
        <Text size="24px" fw={700}>
          {stat.title}
        </Text>
        <Text size="sm">{stat.value}</Text>
      </div>
    </Group>
  ));

  const feedbackItems = feedback.map((feedback) => (
    <Paper radius="sm" style={{ padding: '3px' }} className={classes.paper}>
      <div key={feedback.title}>
        <Stack align="center" justify="center" gap="xs">
          <Text size="lg" fw={700} className={classes.textC}>
            {feedback.title}
          </Text>
          <Rating value={feedback.value} readOnly className={classes.rating} size="lg" />
        </Stack>
      </div>
    </Paper>
  ));

  return (
    <Card withBorder padding="lg" className={classes.card}>
      <Card.Section className={classes.footer}>
        <Group>
          <Tooltip label="Delete" position="bottom">
            <Button variant="light" onClick={handleDelete} aria-label="Delete Run">
              <FaRegTrashAlt size={20} />
            </Button>
          </Tooltip>
          <Tooltip label="Edit" position="bottom">
            <Button variant="light" onClick={() => editRun(id)} aria-label="Edit Run">
              <FaPencilAlt />
            </Button>
          </Tooltip>

          {note && (
            <HoverCard closeDelay={0}>
              <HoverCard.Target>
                <Button variant="light" aria-label="View Note">
                  <FaBookOpen size={20} />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown className={classes.note}>{note}</HoverCard.Dropdown>
            </HoverCard>
          )}
        </Group>
      </Card.Section>

      <Card.Section className={classes.footer}>{feedbackItems}</Card.Section>

      <Card.Section className={classes.itemsfooter}>{items}</Card.Section>
    </Card>
  );
};
