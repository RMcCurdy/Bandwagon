using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class AddedBadges2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Badges_Accounts_AccountId",
                table: "Badges");

            migrationBuilder.DropTable(
                name: "BadgesEarned");

            migrationBuilder.DropIndex(
                name: "IX_Badges_AccountId",
                table: "Badges");

            migrationBuilder.DropColumn(
                name: "AccountId",
                table: "Badges");

            migrationBuilder.CreateTable(
                name: "AccountBadge",
                columns: table => new
                {
                    AccountsId = table.Column<int>(type: "INTEGER", nullable: false),
                    BadgesId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountBadge", x => new { x.AccountsId, x.BadgesId });
                    table.ForeignKey(
                        name: "FK_AccountBadge_Accounts_AccountsId",
                        column: x => x.AccountsId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AccountBadge_Badges_BadgesId",
                        column: x => x.BadgesId,
                        principalTable: "Badges",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountBadge_BadgesId",
                table: "AccountBadge",
                column: "BadgesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountBadge");

            migrationBuilder.AddColumn<int>(
                name: "AccountId",
                table: "Badges",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "BadgesEarned",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AccountId = table.Column<int>(type: "INTEGER", nullable: false),
                    BadgeId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BadgesEarned", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BadgesEarned_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Badges_AccountId",
                table: "Badges",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_BadgesEarned_AccountId",
                table: "BadgesEarned",
                column: "AccountId");

            migrationBuilder.AddForeignKey(
                name: "FK_Badges_Accounts_AccountId",
                table: "Badges",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
