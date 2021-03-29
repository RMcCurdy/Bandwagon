using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class UpdatedGame : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GameDateTime",
                table: "Games");

            migrationBuilder.RenameColumn(
                name: "LocationCity",
                table: "Games",
                newName: "GameTime");

            migrationBuilder.AddColumn<string>(
                name: "GameDay",
                table: "Games",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GameMonth",
                table: "Games",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GameDay",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "GameMonth",
                table: "Games");

            migrationBuilder.RenameColumn(
                name: "GameTime",
                table: "Games",
                newName: "LocationCity");

            migrationBuilder.AddColumn<DateTime>(
                name: "GameDateTime",
                table: "Games",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
