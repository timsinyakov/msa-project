using System;
using System.Collections.Generic;

namespace msarun.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Email { get; set; } = null!;

    public virtual ICollection<Run> Runs { get; set; } = new List<Run>();
}
