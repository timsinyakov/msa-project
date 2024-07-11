using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RunJournal.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Runs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Time = table.Column<int>(type: "int", nullable: true),
                    Enjoyment = table.Column<byte>(type: "tinyint", nullable: false),
                    Difficulty = table.Column<byte>(type: "tinyint", nullable: false),
                    Pain = table.Column<byte>(type: "tinyint", nullable: false),
                    Effort = table.Column<byte>(type: "tinyint", nullable: false),
                    Note = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Runs", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Runs");
        }
    }
}
