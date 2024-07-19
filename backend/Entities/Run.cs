namespace RunJournal.Entities
{
    public class Run
    {
        public int Id { get; set; }

        public string UserUID { get; set; }

        public int Distance { get; set; }

        public int? Time { get; set; }

        public byte Enjoyment { get; set; }

        public byte Difficulty { get; set; }

        public byte Pain { get; set; }

        public byte Effort { get; set; }

        public string? Note { get; set; }
    }
}
