using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace msarun.Models;

public partial class Msa1Context : DbContext
{
    public Msa1Context()
    {
    }

    public Msa1Context(DbContextOptions<Msa1Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Run> Runs { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=msa-1;Trusted_Connection=true;TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Run>(entity =>
        {
            entity.ToTable("Run");

            entity.Property(e => e.RunId)
                .ValueGeneratedNever()
                .HasColumnName("runId");
            entity.Property(e => e.Difficulty).HasColumnName("difficulty");
            entity.Property(e => e.Effort).HasColumnName("effort");
            entity.Property(e => e.Enjoyment).HasColumnName("enjoyment");
            entity.Property(e => e.Note)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("note");
            entity.Property(e => e.Pain).HasColumnName("pain");
            entity.Property(e => e.Time).HasColumnName("time");
            entity.Property(e => e.UserId).HasColumnName("userId");


        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");

            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("userId");
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("email");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
