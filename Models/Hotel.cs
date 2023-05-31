using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPIAngular.Models
{
    [Table("tblHotel")]
    public class TblHotel
    {
        [Key]
        public int id { get; set; }
        public string menu { get; set; } = string.Empty;
        public int price { get; set; }
    }
    public class HotelDBConnect : DbContext
    {
        public virtual DbSet<TblHotel> Hotels { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            const string STRCONN = @"Data Source=W-674PY03-1;Initial Catalog=VeereshDB;Persist Security Info=True;User ID=sa;Password=Password@12345; TrustServerCertificate=true;";
            optionsBuilder.UseSqlServer(STRCONN);
        }
    }
}
