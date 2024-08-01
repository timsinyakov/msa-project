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
} from '@mantine/core';
import classes from './NewSingleRun.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useRuns } from '@/Hooks/useRuns';
import { FaBookOpen } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
  date: Date;
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
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const stats = [
    { title: 'Distance', value: distance.toString() + ' km' },
    { title: 'Avg. speed', value: (distance / time).toFixed(2) + ' km/hr' },
    { title: 'Time', value: time.toString() + ' min' },
  ];

  const feedback = [
    { title: 'Enjoyment', value: enjoyment },
    { title: 'Difficulty', value: difficulty },
    { title: 'Effort', value: effort },

    { title: 'Pain', value: pain },
  ];

  const items = stats.map((stat) => (
    <Center>
      <div key={stat.title}>
        <Text size="xs">{stat.title}</Text>
        <Text fw={500} size="sm">
          {stat.value}
        </Text>
      </div>
    </Center>
  ));

  const feedbackItems = feedback.map((feedback) => (
    <Paper radius="sm" style={{ padding: '3px' }} className={classes.paper}>
      <div key={feedback.title}>
        <Stack align="center" justify="center" gap="xs">
          <Text size="xs">{feedback.title}</Text>
          <Rating value={feedback.value} readOnly className={classes.rating} size="lg" />
        </Stack>
      </div>
    </Paper>
  ));

  return (
    <Card withBorder padding="lg" className={classes.card}>
      <Card.Section className={classes.footer}>
        <Group>
          <Tooltip label="Delete">
            <Button variant="light" onClick={handleDelete}>
              <FaRegTrashAlt size={20} />
            </Button>
          </Tooltip>
          <Tooltip label="Edit">
            <Button variant="light" onClick={() => editRun(id)}>
              <FaPencilAlt />
            </Button>
          </Tooltip>
        </Group>

        {note && (
          <HoverCard closeDelay={0}>
            <HoverCard.Target>
              <Button variant="light">
                <FaBookOpen />
              </Button>
            </HoverCard.Target>
            <HoverCard.Dropdown className={classes.note}>{note}</HoverCard.Dropdown>
          </HoverCard>
        )}
      </Card.Section>

      <Card.Section className={classes.footer}>{feedbackItems}</Card.Section>

      <Card.Section className={classes.footer}>{items}</Card.Section>
    </Card>
  );
};
