﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NBAapi.Data;

namespace NBAapi.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    partial class ApiDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("AccountBadge", b =>
                {
                    b.Property<int>("AccountsId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("BadgesId")
                        .HasColumnType("INTEGER");

                    b.HasKey("AccountsId", "BadgesId");

                    b.HasIndex("BadgesId");

                    b.ToTable("AccountBadge");
                });

            modelBuilder.Entity("NBAapi.Entities.Account", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Firstname")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Lastname")
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .HasColumnType("TEXT");

                    b.Property<string>("ProfileImage")
                        .HasColumnType("TEXT");

                    b.Property<int>("TotalPointsBalance")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TotalPointsEarned")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TotalPointsSpent")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("NBAapi.Entities.Badge", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("BadgeImage")
                        .HasColumnType("TEXT");

                    b.Property<string>("BadgeName")
                        .HasColumnType("TEXT");

                    b.Property<string>("BadgeType")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Badges");
                });

            modelBuilder.Entity("NBAapi.Entities.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("GameDateTime")
                        .HasColumnType("TEXT");

                    b.Property<int>("HomeFinalScore")
                        .HasColumnType("INTEGER");

                    b.Property<int>("HomePercent")
                        .HasColumnType("INTEGER");

                    b.Property<int>("HomePointsPayout")
                        .HasColumnType("INTEGER");

                    b.Property<int>("HomeTeamId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LocationCity")
                        .HasColumnType("TEXT");

                    b.Property<int>("VisitorFinalScore")
                        .HasColumnType("INTEGER");

                    b.Property<int>("VisitorPercent")
                        .HasColumnType("INTEGER");

                    b.Property<int>("VisitorPointsPayout")
                        .HasColumnType("INTEGER");

                    b.Property<int>("VisitorTeamId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("NBAapi.Entities.Merchandise", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ItemName")
                        .HasColumnType("TEXT");

                    b.Property<int>("Price")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Merchandises");
                });

            modelBuilder.Entity("NBAapi.Entities.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AccountId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("OrderTotal")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("NBAapi.Entities.OrderLineItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ItemName")
                        .HasColumnType("TEXT");

                    b.Property<int>("MerchandiseIdRef")
                        .HasColumnType("INTEGER");

                    b.Property<int>("OrderId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Price")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Quantity")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Subtotal")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderLineItems");
                });

            modelBuilder.Entity("NBAapi.Entities.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Assists")
                        .HasColumnType("INTEGER");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsInjured")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.Property<int>("Points")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Rebounds")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TeamId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("TeamId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("NBAapi.Entities.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("DefensiveRating")
                        .HasColumnType("INTEGER");

                    b.Property<string>("HomeCity")
                        .HasColumnType("TEXT");

                    b.Property<int>("OffensiveRating")
                        .HasColumnType("INTEGER");

                    b.Property<string>("TeamName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("NBAapi.Entities.Vote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AccountId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("GameId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PointsAwarded")
                        .HasColumnType("INTEGER");

                    b.Property<int>("VotedForTeamId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("AccountId");

                    b.HasIndex("GameId");

                    b.ToTable("Votes");
                });

            modelBuilder.Entity("AccountBadge", b =>
                {
                    b.HasOne("NBAapi.Entities.Account", null)
                        .WithMany()
                        .HasForeignKey("AccountsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("NBAapi.Entities.Badge", null)
                        .WithMany()
                        .HasForeignKey("BadgesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("NBAapi.Entities.Order", b =>
                {
                    b.HasOne("NBAapi.Entities.Account", "Account")
                        .WithMany("Orders")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("NBAapi.Entities.OrderLineItem", b =>
                {
                    b.HasOne("NBAapi.Entities.Order", "Order")
                        .WithMany("OrderLineItems")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");
                });

            modelBuilder.Entity("NBAapi.Entities.Player", b =>
                {
                    b.HasOne("NBAapi.Entities.Team", "Team")
                        .WithMany("Players")
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Team");
                });

            modelBuilder.Entity("NBAapi.Entities.Vote", b =>
                {
                    b.HasOne("NBAapi.Entities.Account", "Account")
                        .WithMany("Votes")
                        .HasForeignKey("AccountId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("NBAapi.Entities.Game", "Game")
                        .WithMany("Votes")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");

                    b.Navigation("Game");
                });

            modelBuilder.Entity("NBAapi.Entities.Account", b =>
                {
                    b.Navigation("Orders");

                    b.Navigation("Votes");
                });

            modelBuilder.Entity("NBAapi.Entities.Game", b =>
                {
                    b.Navigation("Votes");
                });

            modelBuilder.Entity("NBAapi.Entities.Order", b =>
                {
                    b.Navigation("OrderLineItems");
                });

            modelBuilder.Entity("NBAapi.Entities.Team", b =>
                {
                    b.Navigation("Players");
                });
#pragma warning restore 612, 618
        }
    }
}
