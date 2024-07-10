using System;
using System.Collections.Generic;

namespace msarun.Models;

public partial class Run
{
    public int RunId { get; set; }

    public int UserId { get; set; }

    public int? Time { get; set; }

    public byte Enjoyment { get; set; }

    public byte Difficulty { get; set; }

    public byte Pain { get; set; }

    public byte Effort { get; set; }

    public string? Note { get; set; }

}
