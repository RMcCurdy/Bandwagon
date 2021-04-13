using Microsoft.EntityFrameworkCore.Migrations;

namespace NBAapi.Migrations
{
    public partial class UpdatedMerchandiseIdRef : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MerchandiseIdRef",
                table: "OrderLineItems",
                newName: "MerchandiseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MerchandiseId",
                table: "OrderLineItems",
                newName: "MerchandiseIdRef");
        }
    }
}
