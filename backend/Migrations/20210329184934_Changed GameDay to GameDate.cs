using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class ChangedGameDaytoGameDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "GameDay",
                table: "Games",
                newName: "GameDate");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "GameDate",
                table: "Games",
                newName: "GameDay");
        }
    }
}
