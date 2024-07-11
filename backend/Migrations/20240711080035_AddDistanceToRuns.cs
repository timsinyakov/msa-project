using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RunJournal.Migrations
{
    /// <inheritdoc />
    public partial class AddDistanceToRuns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Distance",
                table: "Runs",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Distance",
                table: "Runs");
        }
    }
}
