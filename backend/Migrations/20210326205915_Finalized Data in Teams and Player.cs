using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class FinalizedDatainTeamsandPlayer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsInjured",
                table: "Players");

            migrationBuilder.RenameColumn(
                name: "OffensiveRating",
                table: "Teams",
                newName: "TotalRebounds");

            migrationBuilder.RenameColumn(
                name: "DefensiveRating",
                table: "Teams",
                newName: "TotalAssists");

            migrationBuilder.AddColumn<int>(
                name: "AwayPoints",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FieldGoalPercent",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "HomePoints",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ThreePointPercent",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AwayPoints",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "FieldGoalPercent",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "HomePoints",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "ThreePointPercent",
                table: "Teams");

            migrationBuilder.RenameColumn(
                name: "TotalRebounds",
                table: "Teams",
                newName: "OffensiveRating");

            migrationBuilder.RenameColumn(
                name: "TotalAssists",
                table: "Teams",
                newName: "DefensiveRating");

            migrationBuilder.AddColumn<bool>(
                name: "IsInjured",
                table: "Players",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }
    }
}
