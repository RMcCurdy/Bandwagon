using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class AddedHomeandAwaystats : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ThreePointPercent",
                table: "Teams",
                newName: "HomeThreePointPercent");

            migrationBuilder.RenameColumn(
                name: "FieldGoalPercent",
                table: "Teams",
                newName: "HomeFieldGoalPercent");

            migrationBuilder.AddColumn<int>(
                name: "AwayFieldGoalPercent",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AwayThreePointPercent",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AwayFieldGoalPercent",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "AwayThreePointPercent",
                table: "Teams");

            migrationBuilder.RenameColumn(
                name: "HomeThreePointPercent",
                table: "Teams",
                newName: "ThreePointPercent");

            migrationBuilder.RenameColumn(
                name: "HomeFieldGoalPercent",
                table: "Teams",
                newName: "FieldGoalPercent");
        }
    }
}
