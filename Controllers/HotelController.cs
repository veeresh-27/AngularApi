using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPIAngular.Models;

namespace WebAPIAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {
        private readonly IDBOperations comp;
        public HotelController(IDBOperations comp)
        {
            this.comp = comp;
        }

        [Route("allHotels")]
        public List<TblHotel> GetAllHotels() => comp.GetAllHotels();

        [Route("{id}")]
        public TblHotel GetEmpById(int id) => comp.GethotelById(id);

        [HttpPut]
        [Route("{id}")]

        public bool PutHotel(TblHotel Hotel) => comp.Updatehotel(Hotel);

        [HttpPost]
        public bool PostHotel(TblHotel Hotel) => comp.Addhotel(Hotel);

        [HttpDelete]
        [Route("{id}")]

        public bool DeleteHotel(int id) => comp.Deletehotel(id);
    }
}
