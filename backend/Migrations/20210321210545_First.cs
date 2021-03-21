using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class First : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Username = table.Column<string>(type: "TEXT", nullable: true),
                    Password = table.Column<string>(type: "TEXT", nullable: true),
                    ProfileImage = table.Column<string>(type: "TEXT", nullable: true),
                    IsAdmin = table.Column<bool>(type: "INTEGER", nullable: false),
                    TotalPointsEarned = table.Column<int>(type: "INTEGER", nullable: false),
                    TotalPointsSpent = table.Column<int>(type: "INTEGER", nullable: false),
                    TotalPointsBalance = table.Column<int>(type: "INTEGER", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Badges",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BadgeName = table.Column<string>(type: "TEXT", nullable: true),
                    BadgeImage = table.Column<string>(type: "TEXT", nullable: true),
                    BadgeType = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Badges", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    HomeTeamId = table.Column<int>(type: "INTEGER", nullable: false),
                    VisitorTeamId = table.Column<int>(type: "INTEGER", nullable: false),
                    HomePercent = table.Column<int>(type: "INTEGER", nullable: false),
                    VisitorPercent = table.Column<int>(type: "INTEGER", nullable: false),
                    HomePointsPayout = table.Column<int>(type: "INTEGER", nullable: false),
                    VisitorPointsPayout = table.Column<int>(type: "INTEGER", nullable: false),
                    HomeFinalScore = table.Column<int>(type: "INTEGER", nullable: false),
                    VisitorFinalScore = table.Column<int>(type: "INTEGER", nullable: false),
                    GameDateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    LocationCity = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Merchandises",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ItemName = table.Column<string>(type: "TEXT", nullable: true),
                    Price = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Merchandises", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TeamName = table.Column<string>(type: "TEXT", nullable: true),
                    HomeCity = table.Column<string>(type: "TEXT", nullable: true),
                    OffensiveRating = table.Column<int>(type: "INTEGER", nullable: false),
                    DefensiveRating = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    OrderTotal = table.Column<int>(type: "INTEGER", nullable: false),
                    OrderDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    AccountId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateTable(
                name: "Votes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    VotedForTeamId = table.Column<int>(type: "INTEGER", nullable: false),
                    PointsAwarded = table.Column<int>(type: "INTEGER", nullable: false),
                    AccountId = table.Column<int>(type: "INTEGER", nullable: false),
                    GameId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Votes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Votes_Accounts_AccountId",
                        column: x => x.AccountId,
                        principalTable: "Accounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Votes_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: true),
                    LastName = table.Column<string>(type: "TEXT", nullable: true),
                    Points = table.Column<int>(type: "INTEGER", nullable: false),
                    Assists = table.Column<int>(type: "INTEGER", nullable: false),
                    Rebounds = table.Column<int>(type: "INTEGER", nullable: false),
                    IsInjured = table.Column<bool>(type: "INTEGER", nullable: false),
                    TeamId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Players_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderLineItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ItemName = table.Column<string>(type: "TEXT", nullable: true),
                    Price = table.Column<int>(type: "INTEGER", nullable: false),
                    Quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    Subtotal = table.Column<int>(type: "INTEGER", nullable: false),
                    MerchandiseIdRef = table.Column<int>(type: "INTEGER", nullable: false),
                    OrderId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderLineItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderLineItems_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AccountBadge_BadgesId",
                table: "AccountBadge",
                column: "BadgesId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderLineItems_OrderId",
                table: "OrderLineItems",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_AccountId",
                table: "Orders",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Players_TeamId",
                table: "Players",
                column: "TeamId");

            migrationBuilder.CreateIndex(
                name: "IX_Votes_AccountId",
                table: "Votes",
                column: "AccountId");

            migrationBuilder.CreateIndex(
                name: "IX_Votes_GameId",
                table: "Votes",
                column: "GameId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AccountBadge");

            migrationBuilder.DropTable(
                name: "Merchandises");

            migrationBuilder.DropTable(
                name: "OrderLineItems");

            migrationBuilder.DropTable(
                name: "Players");

            migrationBuilder.DropTable(
                name: "Votes");

            migrationBuilder.DropTable(
                name: "Badges");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Teams");

            migrationBuilder.DropTable(
                name: "Games");

            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
