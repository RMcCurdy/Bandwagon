using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class AddedNamesAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Firstname",
                table: "Accounts",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Lastname",
                table: "Accounts",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Firstname",
                table: "Accounts");

            migrationBuilder.DropColumn(
                name: "Lastname",
                table: "Accounts");
        }
    }
}
