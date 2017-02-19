using Iclart.Common.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iclart.DAL
{
    public class ClientRepository
    {
        public List<ClientEntity> GetAllClients()
        {
            using (var context = new IclartDBContext())
            {
                var clients = context.Clients.ToList();
                return clients;
            }
        }
    }
}
