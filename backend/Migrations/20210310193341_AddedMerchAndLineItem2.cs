using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class AddedMerchAndLineItem2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Accounts_AccountId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderLineItem_Order_OrderId",
                table: "OrderLineItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderLineItem",
                table: "OrderLineItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Order",
                table: "Order");

            migrationBuilder.RenameTable(
                name: "OrderLineItem",
                newName: "OrderLineItems");

            migrationBuilder.RenameTable(
                name: "Order",
                newName: "Orders");

            migrationBuilder.RenameIndex(
                name: "IX_OrderLineItem_OrderId",
                table: "OrderLineItems",
                newName: "IX_OrderLineItems_OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_Order_AccountId",
                table: "Orders",
                newName: "IX_Orders_AccountId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderLineItems",
                table: "OrderLineItems",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Orders",
                table: "Orders",
                column: "Id");

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

            migrationBuilder.AddForeignKey(
                name: "FK_OrderLineItems_Orders_OrderId",
                table: "OrderLineItems",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Accounts_AccountId",
                table: "Orders",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderLineItems_Orders_OrderId",
                table: "OrderLineItems");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Accounts_AccountId",
                table: "Orders");

            migrationBuilder.DropTable(
                name: "Merchandises");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Orders",
                table: "Orders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderLineItems",
                table: "OrderLineItems");

            migrationBuilder.RenameTable(
                name: "Orders",
                newName: "Order");

            migrationBuilder.RenameTable(
                name: "OrderLineItems",
                newName: "OrderLineItem");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_AccountId",
                table: "Order",
                newName: "IX_Order_AccountId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderLineItems_OrderId",
                table: "OrderLineItem",
                newName: "IX_OrderLineItem_OrderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Order",
                table: "Order",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderLineItem",
                table: "OrderLineItem",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Accounts_AccountId",
                table: "Order",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderLineItem_Order_OrderId",
                table: "OrderLineItem",
                column: "OrderId",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
